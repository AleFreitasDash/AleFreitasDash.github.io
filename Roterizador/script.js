document.addEventListener('DOMContentLoaded', function () {
    // Definição dos veículos e suas capacidades
    const vehicles = [
        { type: 'Fiorino', capacity: 500 },
        { type: 'Van', capacity: 1500 },
        { type: 'VUC', capacity: 2200 },
        { type: '3/4', capacity: 3200 },
        { type: 'Toco', capacity: 6800 },
        { type: 'Truck', capacity: 12000 },
        { type: 'Bitruck', capacity: 18000 },
        { type: 'Carreta', capacity: 27000 }
    ];

    // Inicialização do mapa Leaflet
    const map = L.map('map').setView([-23.0291596, -46.9752306], 7); // Centralizado em Vinhedo - SP

    // Adiciona o tile layer do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let markers = [];
    let polylines = [];

    // Evento ao submeter o formulário
    document.getElementById('routeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        calculateRoutes();
    });

    // Função principal para calcular as rotas
    async function calculateRoutes() {
        const originInput = document.getElementById('origin').value.trim();
        const destinationsText = document.getElementById('destinations').value.trim();
        const selectedVehicleType = document.getElementById('vehicleType').value;
        const numRoutes = parseInt(document.getElementById('numRoutes').value);

        if (!originInput || !selectedVehicleType || isNaN(numRoutes) || numRoutes < 1) {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            return;
        }

        let destinations = [];
        if (destinationsText) {
            destinations = parseDestinations(destinationsText);
        } else if (document.getElementById('fileUpload').files.length > 0) {
            try {
                destinations = await parseDestinationsFromFile(document.getElementById('fileUpload').files[0]);
            } catch (error) {
                alert('Erro ao processar o arquivo: ' + error.message);
                return;
            }
        } else {
            alert('Por favor, insira destinos e pesos ou faça upload de um arquivo XLSX.');
            return;
        }

        if (destinations.length === 0) {
            alert('Nenhum destino válido foi fornecido.');
            return;
        }

        clearMapAndResults();

        try {
            const originLocation = await geocodeAddress(originInput);
            if (!originLocation) {
                alert('Endereço de origem não encontrado: ' + originInput);
                return;
            }

            const destinationLocations = await geocodeDestinations(destinations);
            if (destinationLocations.length === 0) {
                alert('Nenhum destino válido foi encontrado após geocodificação.');
                return;
            }

            calculateAndDisplayRoutes(originLocation, destinationLocations);
        } catch (error) {
            alert('Erro ao calcular rotas: ' + error.message);
        }
    }

    // Função para analisar os destinos a partir do texto
    function parseDestinations(text) {
        return text.split('\n').map(line => {
            const parts = line.split(';');
            const address = parts[0].trim();
            const weight = parseFloat(parts[1]);
            if (address && !isNaN(weight)) {
                return { address, weight };
            } else {
                return null;
            }
        }).filter(dest => dest !== null);
    }

    // Função para analisar os destinos a partir de um arquivo XLSX
    function parseDestinationsFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    const sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

                    const destinations = sheetData.map(row => {
                        const address = (row[0] || '').toString().trim();
                        const weight = parseFloat(row[1]);
                        if (address && !isNaN(weight)) {
                            return { address, weight };
                        } else {
                            return null;
                        }
                    }).filter(dest => dest !== null);

                    resolve(destinations);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        });
    }

    // Função para limpar o mapa e os resultados anteriores
    function clearMapAndResults() {
        markers.forEach(marker => map.removeLayer(marker));
        polylines.forEach(polyline => map.removeLayer(polyline));
        markers = [];
        polylines = [];
        document.querySelector('#resultsTable tbody').innerHTML = '';
    }

    // Função para geocodificar um endereço usando Nominatim
    function geocodeAddress(address) {
        return new Promise((resolve) => {
            const encodedAddress = encodeURIComponent(address);
            const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodedAddress}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        const result = data[0];
                        resolve({
                            address: address,
                            lat: parseFloat(result.lat),
                            lon: parseFloat(result.lon)
                        });
                    } else {
                        resolve(null);
                    }
                })
                .catch(() => resolve(null));
        });
    }

    // Função para geocodificar uma lista de destinos
    async function geocodeDestinations(destinations) {
        const geocodedDestinations = [];
        for (const dest of destinations) {
            const location = await geocodeAddress(dest.address);
            if (location) {
                geocodedDestinations.push({
                    ...location,
                    weight: dest.weight
                });
            } else {
                alert('Endereço não encontrado: ' + dest.address);
            }
        }
        return geocodedDestinations;
    }

    // Função para calcular e exibir as rotas no mapa
    async function calculateAndDisplayRoutes(origin, destinations) {
        const coordinates = [
            [origin.lat, origin.lon],
            ...destinations.map(dest => [dest.lat, dest.lon])
        ];

        for (let i = 0; i < coordinates.length - 1; i++) {
            const start = coordinates[i];
            const end = coordinates[i + 1];
            const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data && data.routes && data.routes.length > 0) {
                    const route = data.routes[0].geometry;
                    const polyline = L.geoJSON(route, {
                        style: { color: 'blue', weight: 4, opacity: 0.7 }
                    }).addTo(map);
                    polylines.push(polyline);
                }
            } catch (error) {
                alert('Erro ao calcular rota: ' + error.message);
            }
        }

        adjustMapZoom(coordinates);
        displayResults(origin, destinations);
    }

    // Função para ajustar o zoom do mapa para mostrar todas as rotas
    function adjustMapZoom(coordinates) {
        const bounds = new L.LatLngBounds(coordinates.map(coord => [coord[0], coord[1]]));
        map.fitBounds(bounds);
    }

    // Função para exibir os resultados na tabela
    function displayResults(origin, destinations) {
        const tbody = document.querySelector('#resultsTable tbody');
        let routeIndex = 1;
        for (const destination of destinations) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${routeIndex}</td>
                <td>${routeIndex}</td>
                <td>${origin.address}</td>
                <td>${destination.address}</td>
                <td>${destination.weight}</td>
                <td>-</td>
                <td>${vehicles.find(v => v.type === document.getElementById('vehicleType').value).type}</td>
            `;
            tbody.appendChild(row);
            routeIndex++;
        }
    }
});
