// app.js

$(document).ready(function () {
    // Definição dos veículos e suas capacidades
    var vehicles = [
		{ type: 'Fiorino', capacity: 500 },
        { type: 'Van', capacity: 1500 },
		{ type: 'Vuc', capacity: 2200 },
		{ type: '34', capacity: 3200 },
		{ type: 'Toco', capacity: 6800 },
		{ type: 'Truck', capacity: 12000 },
		{ type: 'Bitruck', capacity: 18000 },
        { type: 'Carreta', capacity: 27000 }
    ];

    var map = L.map('map').setView([-23.0291596, -46.9752306], 5); // Centralizado em Vinhedo - SP

    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var markers = [];
    var polylines = [];

    $('#routeForm').on('submit', function (e) {
        e.preventDefault();
        calculateRoutes();
    });

    function calculateRoutes() {
        var origin = $('#origin').val();
        var destinationsText = $('#destinations').val();
        var selectedVehicleType = $('#vehicleType').val();
        var numRoutes = parseInt($('#numRoutes').val());

        // Obter veículo selecionado
        var selectedVehicle = vehicles.find(v => v.type === selectedVehicleType);

        // Obter destinos e pesos
        var destinations = [];

        if (destinationsText.trim() !== '') {
            // Processar entrada de texto
            destinations = destinationsText.split('\n').map(function (line) {
                var parts = line.split(';');
                // Remover espaços extras e tabulações
                var address = parts[0].replace(/\s+/g, ' ').trim();
                var weight = parseFloat(parts[1]) || 0;
                return {
                    address: address,
                    weight: weight
                };
            }).filter(function (dest) {
                return dest.address !== '';
            });

            proceedWithCalculations();
        } else if ($('#fileUpload')[0].files.length > 0) {
            // Processar arquivo XLSX
            var file = $('#fileUpload')[0].files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, { type: 'array' });
                var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                var sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

                destinations = sheetData.map(function (row) {
                    var address = (row[0] || '').toString().replace(/\s+/g, ' ').trim();
                    var weight = parseFloat(row[1]) || 0;
                    return {
                        address: address,
                        weight: weight
                    };
                }).filter(function (dest) {
                    return dest.address !== '';
                });

                proceedWithCalculations();
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert('Por favor, insira destinos e pesos ou faça upload de um arquivo XLSX.');
            return;
        }

        function proceedWithCalculations() {
            if (!origin || destinations.length === 0) {
                alert('Por favor, insira a origem e pelo menos um destino.');
                return;
            }

            if (isNaN(numRoutes) || numRoutes < 1) {
                alert('Por favor, insira um número válido de rotas.');
                return;
            }

            // Limpa marcadores, polilinhas e tabela
            markers.forEach(function (marker) {
                map.removeLayer(marker);
            });
            polylines.forEach(function (polyline) {
                map.removeLayer(polyline);
            });
            markers = [];
            polylines = [];
            $('#resultsTable tbody').empty();

            // Limpar e formatar a origem
            origin = origin.replace(/\s+/g, ' ').trim();

            // Geocodifica a origem
            geocodeAddress(origin, function (originData) {
                if (!originData) {
                    alert('Endereço de origem não encontrado: ' + origin);
                    return;
                }

                var originLocation = {
                    type: 'origin',
                    address: origin,
                    lat: parseFloat(originData.lat),
                    lon: parseFloat(originData.lon)
                };

                // Geocodifica destinos
                var geocodePromises = destinations.map(function (dest) {
                    return new Promise(function (resolve) {
                        geocodeAddress(dest.address, function (destData) {
                            if (destData) {
                                resolve({
                                    type: 'destination',
                                    address: dest.address,
                                    lat: parseFloat(destData.lat),
                                    lon: parseFloat(destData.lon),
                                    weight: dest.weight
                                });
                            } else {
                                alert('Endereço não encontrado: ' + dest.address);
                                resolve(null);
                            }
                        });
                    });
                });

                Promise.all(geocodePromises).then(function (destResults) {
                    destResults = destResults.filter(function (res) {
                        return res !== null;
                    });

                    if (destResults.length < 1) {
                        alert('Nenhum destino válido encontrado.');
                        return;
                    }

                    calculateAndDisplayRoutes(originLocation, destResults, selectedVehicle, numRoutes);
                });
            });
        }
    }

    function geocodeAddress(address, callback) {
		var encodedAddress = encodeURIComponent(address);
        var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodedAddress;

        console.log('Endereço original:', address);
        console.log('Endereço codificado:', encodedAddress);

        $.getJSON(url, function (data) {
            if (data && data.length > 0) {
                callback(data[0]);
            } else {
                callback(null);
            }
        }).fail(function () {
            callback(null);
        });
    }

    function splitDestinationsIntoRoutes(destinations, vehicleCapacity, numRoutes) {
        // Ordenar destinos por peso decrescente (heurística simples)
        destinations.sort(function (a, b) {
            return b.weight - a.weight;
        });

        // Inicializar rotas vazias
        var routes = [];
        for (var i = 0; i < numRoutes; i++) {
            routes.push({
                destinations: [],
                totalWeight: 0
            });
        }

        var unassignedDestinations = [];

        // Atribuir destinos às rotas
        destinations.forEach(function (dest) {
            // Encontrar a rota com menor peso total que possa acomodar o destino
            var suitableRoute = null;

            routes.forEach(function (route) {
                if (route.totalWeight + dest.weight <= vehicleCapacity) {
                    if (!suitableRoute || route.totalWeight < suitableRoute.totalWeight) {
                        suitableRoute = route;
                    }
                }
            });

            if (suitableRoute) {
                suitableRoute.destinations.push(dest);
                suitableRoute.totalWeight += dest.weight;
            } else {
                // Não foi possível acomodar o destino na capacidade do veículo
                unassignedDestinations.push(dest);
            }
        });

        return { routes: routes, unassignedDestinations: unassignedDestinations };
    }

    function calculateAndDisplayRoutes(origin, destinations, selectedVehicle, numRoutes) {
        var totalDistance = 0;
        var routePromises = [];
        var routeIndex = 1;

        // Se nenhum veículo for selecionado, determinar o veículo adequado para cada rota
        if (!selectedVehicle) {
            // Vamos assumir inicialmente que o veículo é o de maior capacidade
            selectedVehicle = vehicles[vehicles.length - 1]; // Veículo com maior capacidade
        }

        // Dividir destinos em rotas com base na capacidade e no número de rotas
        var result = splitDestinationsIntoRoutes(destinations, selectedVehicle.capacity, numRoutes);
        var routes = result.routes;
        var unassignedDestinations = result.unassignedDestinations;

        // Lidar com destinos não atribuídos
        if (unassignedDestinations.length > 0) {
            unassignedDestinations.forEach(function (dest) {
                // Tentar encontrar um veículo que suporte esta entrega
                var vehicleForDestination = vehicles.find(function (v) {
                    return v.capacity >= dest.weight;
                });

                if (vehicleForDestination) {
                    // Criar uma nova rota para esta entrega
                    routes.push({
                        destinations: [dest],
                        totalWeight: dest.weight,
                        vehicle: vehicleForDestination
                    });
                } else {
                    alert('Nenhum veículo disponível suporta a entrega para ' + dest.address + ' (Peso: ' + dest.weight + ' kg)');
                }
            });
        }

        routes.forEach(function (route, routeIdx) {
            var routeDestinations = route.destinations;

            // Determinar o veículo adequado para esta rota com base no peso total
            var routeVehicle = route.vehicle || selectedVehicle;

            // Encontrar o menor veículo que suporte o peso total da rota
            var routeTotalWeight = route.totalWeight;
            routeVehicle = vehicles.find(function (v) {
                return v.capacity >= routeTotalWeight;
            });

            if (!routeVehicle) {
                alert('Nenhum veículo disponível suporta o peso total da rota ' + (routeIdx + 1));
                return;
            }

            routeDestinations.forEach(function (destination, index) {
                var delay = (routeIdx * routeDestinations.length + index) * 500; // Ajuste do delay
                var promise = new Promise(function (resolve) {
                    setTimeout(function () {
                        var coordinates = origin.lon + ',' + origin.lat + ';' + destination.lon + ',' + destination.lat;
                        var url = 'https://router.project-osrm.org/route/v1/driving/' + coordinates + '?overview=full&geometries=geojson';

                        $.getJSON(url, function (data) {
                            if (data && data.routes && data.routes.length > 0) {
                                var routeData = data.routes[0];
                                var distanceKm = (routeData.distance / 1000).toFixed(2);
                                totalDistance += parseFloat(distanceKm);

                                // Desenha a rota no mapa
                                var geojson = L.geoJSON(routeData.geometry, {
                                    style: function () {
                                        return { color: getRandomColor() };
                                    }
                                }).addTo(map);
                                polylines.push(geojson);

                                // Adiciona marcadores
                                var originMarker = L.marker([origin.lat, origin.lon]).addTo(map);
                                originMarker.bindPopup('Origem: ' + origin.address);
                                markers.push(originMarker);

                                var destMarker = L.marker([destination.lat, destination.lon]).addTo(map);
                                destMarker.bindPopup('Destino: ' + destination.address);
                                markers.push(destMarker);

                                // Adiciona dados na tabela
                                $('#resultsTable tbody').append(
                                    '<tr>' +
                                    '<td>' + (routeIdx + 1) + '</td>' +
                                    '<td>' + (index + 1) + '</td>' +
                                    '<td>' + origin.address + '</td>' +
                                    '<td>' + destination.address + '</td>' +
                                    '<td>' + destination.weight + '</td>' +
                                    '<td>' + distanceKm + '</td>' +
                                    '<td>' + routeVehicle.type + '</td>' +
                                    '</tr>'
                                );

                                resolve();
                            } else {
                                alert('Não foi possível calcular a rota para ' + destination.address);
                                resolve();
                            }
                        }).fail(function () {
                            alert('Erro ao solicitar dados de roteamento para ' + destination.address);
                            resolve();
                        });
                    }, delay);
                });

                routePromises.push(promise);
            });

            routeIndex++;
        });

        // Após todas as rotas serem processadas
        Promise.all(routePromises).then(function () {
            // Ajusta o zoom do mapa para mostrar todos os marcadores
            var group = new L.featureGroup(markers);
            if (group.getBounds().isValid()) {
                map.fitBounds(group.getBounds().pad(0.5));
            }

            // Exibe a distância total
            $('#resultsTable tbody').append(
                '<tr>' +
                '<td colspan="5"><strong>Distância Total</strong></td>' +
                '<td><strong>' + totalDistance.toFixed(2) + '</strong></td>' +
                '<td></td>' +
                '</tr>'
            );
        });
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Funções de download

    $('#downloadXLSX').on('click', function () {
        var wb = XLSX.utils.table_to_book(document.getElementById('resultsTable'), { sheet: "Resultados" });
        XLSX.writeFile(wb, 'rotas.xlsx');
    });

    $('#downloadPDF').on('click', function () {
        var doc = new jsPDF();
        doc.autoTable({ html: '#resultsTable' });
        doc.save('rotas.pdf');
    });

    $('#downloadTXT').on('click', function () {
        var text = '';
        $('#resultsTable tr').each(function () {
            var row = [];
            $(this).find('th, td').each(function () {
                row.push($(this).text());
            });
            text += row.join('\t') + '\n';
        });
        var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'rotas.txt');
    });
});