$(document).ready(function () {
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
    const map = L.map('map').setView([-23.0291596, -46.9752306], 5); // Centralizado em Vinhedo - SP

    // Adiciona o tile layer do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let markers = [];
    let polylines = [];

    // Evento ao submeter o formulário
    $('#routeForm').on('submit', function (e) {
        e.preventDefault();
        calculateRoutes();
    });

    // Função principal para calcular as rotas
    async function calculateRoutes() {
        // Obtenção dos valores dos campos do formulário
        const originInput = $('#origin').val().trim();
        const destinationsText = $('#destinations').val().trim();
        const selectedVehicleType = $('#vehicleType').val();
        const numRoutes = parseInt($('#numRoutes').val());

        // Verificações básicas dos campos
        if (!originInput) {
            alert('Por favor, insira o endereço de origem.');
            return;
        }

        if (!selectedVehicleType) {
            alert('Por favor, selecione um tipo de veículo.');
            return;
        }

        if (isNaN(numRoutes) || numRoutes < 1) {
            alert('Por favor, insira um número válido de rotas.');
            return;
        }

        // Seleciona o veículo com base no tipo escolhido
        let selectedVehicle = vehicles.find(v => v.type === selectedVehicleType);

        let destinations = [];

        // Processa os destinos a partir do texto ou arquivo
        if (destinationsText !== '') {
            destinations = parseDestinations(destinationsText);
        } else if ($('#fileUpload')[0].files.length > 0) {
            try {
                destinations = await parseDestinationsFromFile($('#fileUpload')[0].files[0]);
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

        // Limpa o mapa e resultados anteriores
        clearMapAndResults();

        try {
            // Geocodifica a origem
            const originLocation = await geocodeAddress(originInput);
            if (!originLocation) {
                alert('Endereço de origem não encontrado: ' + originInput);
                return;
            }

            // Geocodifica os destinos
            const destinationLocations = await geocodeDestinations(destinations);

            if (destinationLocations.length === 0) {
                alert('Nenhum destino válido foi encontrado após geocodificação.');
                return;
            }

            // Calcula e exibe as rotas no mapa e na tabela
            calculateAndDisplayRoutes(originLocation, destinationLocations, selectedVehicle, numRoutes);
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
        $('#resultsTable tbody').empty();
    }

    // Função para geocodificar um endereço usando o Nominatim
    function geocodeAddress(address) {
        return new Promise((resolve) => {
            const encodedAddress = encodeURIComponent(address);
            const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodedAddress}`;

            $.getJSON(url, data => {
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
            }).fail(() => {
                resolve(null);
            });
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

    // Função para dividir os destinos em rotas com base na capacidade do veículo
    function splitDestinationsIntoRoutes(destinations, vehicleCapacity, numRoutes) {
        // Ordena os destinos por peso decrescente
        destinations.sort((a, b) => b.weight - a.weight);

        const routes = Array.from({ length: numRoutes }, () => ({
            destinations: [],
            totalWeight: 0
        }));

        const unassignedDestinations = [];

        destinations.forEach(dest => {
            // Tenta encontrar uma rota que possa acomodar o destino
            let suitableRoute = null;

            for (const route of routes) {
                if (route.totalWeight + dest.weight <= vehicleCapacity) {
                    suitableRoute = route;
                    break;
                }
            }

            if (suitableRoute) {
                suitableRoute.destinations.push(dest);
                suitableRoute.totalWeight += dest.weight;
            } else {
                // Não foi possível acomodar o destino na capacidade do veículo
                unassignedDestinations.push(dest);
            }
        });

        return { routes, unassignedDestinations };
    }

    // Função para calcular e exibir as rotas no mapa e na tabela
    async function calculateAndDisplayRoutes(origin, destinations, selectedVehicle, numRoutes) {
        let totalDistance = 0;

        // Divide os destinos em rotas com base na capacidade do veículo
        const { routes, unassignedDestinations } = splitDestinationsIntoRoutes(destinations, selectedVehicle.capacity, numRoutes);

        // Trata os destinos não atribuídos
        if (unassignedDestinations.length > 0) {
            for (const dest of unassignedDestinations) {
                // Tenta encontrar um veículo que suporte esta entrega
                const vehicleForDestination = vehicles.find(v => v.capacity >= dest.weight);

                if (vehicleForDestination) {
                    // Cria uma nova rota para esta entrega
                    routes.push({
                        destinations: [dest],
                        totalWeight: dest.weight,
                        vehicle: vehicleForDestination
                    });
                } else {
                    alert(`Nenhum veículo disponível suporta a entrega para ${dest.address} (Peso: ${dest.weight} kg)`);
                }
            }
        }

        let routeIdx = 1;
        for (const route of routes) {
            const routeDestinations = route.destinations;

            // Determina o veículo adequado para esta rota com base no peso total
            let routeVehicle = route.vehicle || selectedVehicle;

            // Encontra o menor veículo que suporte o peso total da rota
            const routeTotalWeight = route.totalWeight;
            routeVehicle = vehicles.find(v => v.capacity >= routeTotalWeight) || vehicles[vehicles.length - 1];

            for (let index = 0; index < routeDestinations.length; index++) {
                const destination = routeDestinations[index];
                try {
                    const distanceKm = await calculateRouteDistance(origin, destination);

                    totalDistance += distanceKm;

                    // Desenha a rota no mapa
                    drawRouteOnMap(origin, destination);

                    // Adiciona marcadores ao mapa
                    addMarkersToMap(origin, destination);

                    // Adiciona dados na tabela de resultados
                    addToResultsTable(routeIdx, index + 1, origin.address, destination.address, destination.weight, distanceKm, routeVehicle.type);
                } catch (error) {
                    alert('Erro ao calcular rota para ' + destination.address + ': ' + error.message);
                }
            }
            routeIdx++;
        }

        // Ajusta o zoom do mapa para mostrar todos os marcadores
        adjustMapZoom();

        // Exibe a distância total na tabela de resultados
        displayTotalDistance(totalDistance);
    }

    // Função para calcular a distância da rota entre dois pontos usando o OSRM
    function calculateRouteDistance(origin, destination) {
        return new Promise((resolve, reject) => {
            const coordinates = `${origin.lon},${origin.lat};${destination.lon},${destination.lat}`;
            const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=false`;

            $.getJSON(url, data => {
                if (data && data.routes && data.routes.length > 0) {
                    const routeData = data.routes[0];
                    const distanceKm = routeData.distance / 1000;
                    resolve(distanceKm);
                } else {
                    reject(new Error('Dados de rota inválidos.'));
                }
            }).fail(() => {
                reject(new Error('Erro na solicitação ao serviço de roteamento.'));
            });
        });
    }

    // Função para desenhar a rota no mapa
    function drawRouteOnMap(origin, destination) {
        const latlngs = [
            [origin.lat, origin.lon],
            [destination.lat, destination.lon]
        ];
        const polyline = L.polyline(latlngs, { color: getRandomColor() }).addTo(map);
        polylines.push(polyline);
    }

    // Função para adicionar marcadores de origem e destino ao mapa
    function addMarkersToMap(origin, destination) {
        const originMarker = L.marker([origin.lat, origin.lon]).addTo(map);
        originMarker.bindPopup('Origem: ' + origin.address);
        markers.push(originMarker);

        const destMarker = L.marker([destination.lat, destination.lon]).addTo(map);
        destMarker.bindPopup('Destino: ' + destination.address);
        markers.push(destMarker);
    }

    // Função para adicionar informações na tabela de resultados
    function addToResultsTable(routeNumber, sequence, originAddress, destinationAddress, weight, distanceKm, vehicleType) {
        $('#resultsTable tbody').append(
            `<tr>
                <td>${routeNumber}</td>
                <td>${sequence}</td>
                <td>${originAddress}</td>
                <td>${destinationAddress}</td>
                <td>${weight}</td>
                <td>${distanceKm.toFixed(2)}</td>
                <td>${vehicleType}</td>
            </tr>`
        );
    }

    // Função para ajustar o zoom do mapa para mostrar todos os marcadores
    function adjustMapZoom() {
        const group = new L.featureGroup(markers);
        if (group.getBounds().isValid()) {
            map.fitBounds(group.getBounds().pad(0.5));
        }
    }

    // Função para exibir a distância total na tabela de resultados
    function displayTotalDistance(totalDistance) {
        $('#resultsTable tbody').append(
            `<tr>
                <td colspan="5"><strong>Distância Total</strong></td>
                <td><strong>${totalDistance.toFixed(2)}</strong></td>
                <td></td>
            </tr>`
        );
    }

    // Função para gerar uma cor aleatória para as rotas no mapa
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Funções para download dos resultados em diferentes formatos
    $('#downloadXLSX').on('click', function () {
        const wb = XLSX.utils.table_to_book(document.getElementById('resultsTable'), { sheet: "Resultados" });
        XLSX.writeFile(wb, 'rotas.xlsx');
    });

    $('#downloadPDF').on('click', function () {
        const doc = new jsPDF();
        doc.autoTable({ html: '#resultsTable' });
        doc.save('rotas.pdf');
    });

    $('#downloadTXT').on('click', function () {
        let text = '';
        $('#resultsTable tr').each(function () {
            const row = [];
            $(this).find('th, td').each(function () {
                row.push($(this).text());
            });
            text += row.join('\t') + '\n';
        });
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'rotas.txt');
    });
});
