// Inicializa o mapa
var map = L.map('map').setView([-14.2350, -51.9253], 4); // Centro do Brasil
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Dados do mapa © OpenStreetMap contributors'
}).addTo(map);

// Variáveis globais para armazenar as rotas e os marcadores
window.currentRoutes = [];
window.markers = [];

// Função auxiliar para detectar se a entrada é um CEP
function isCEP(address) {
    // Remove espaços, hífens e pontos
    var cep = address.replace(/\s|\-|\./g, '');
    // Verifica se tem 8 dígitos numéricos
    return /^[0-9]{8}$/.test(cep);
}

// Função para obter coordenadas pelo CEP usando a BrasilAPI
function getCoordinatesByCEP(cep) {
    var cleanCEP = cep.replace(/\s|\-|\./g, '');
    return $.ajax({
        url: 'https://brasilapi.com.br/api/cep/v2/' + cleanCEP,
        method: 'GET'
    });
}

// Função auxiliar para geocodificar um endereço
function geocode(address) {
    if (isCEP(address)) {
        // Se for CEP, usa a BrasilAPI
        return getCoordinatesByCEP(address).then(function(data) {
            if (data && data.location && data.location.coordinates) {
                var lat = data.location.coordinates.latitude;
                var lon = data.location.coordinates.longitude;
                return {
                    address: address,
                    coordinates: [lon, lat]
                };
            } else {
                alert('CEP não encontrado: ' + address);
                throw 'CEP não encontrado';
            }
        }).catch(function(error) {
            console.error('Erro ao consultar o CEP:', error);
            alert('Erro ao consultar o CEP: ' + address);
            throw error;
        });
    } else {
        // Se não for CEP, usa o Nominatim
        return $.ajax({
            url: 'https://nominatim.openstreetmap.org/search',
            data: {
                q: address,
                format: 'json',
                addressdetails: 1,
                countrycodes: 'br',
                limit: 1
            }
        }).then(function(data) {
            if (data && data[0]) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                return {
                    address: address,
                    coordinates: [lon, lat]
                };
            } else {
                alert('Endereço não encontrado: ' + address);
                throw 'Endereço não encontrado';
            }
        }).catch(function(error) {
            console.error('Erro na geocodificação:', error);
            throw error;
        });
    }
}

// Evento de submissão do formulário
$('#routeForm').on('submit', function(e) {
    e.preventDefault();
    $('#routeInfo').empty();
    $('#downloadBtn').hide();

    var origin = $('#origin').val().trim();
    var destinations = $('#destinations').val().split('\n').map(function(dest) {
        return dest.trim();
    }).filter(function(dest) {
        return dest !== '';
    });
    var numRoutes = parseInt($('#numRoutes').val());

    if (!origin || destinations.length === 0) {
        alert('Por favor, informe a origem e pelo menos um destino.');
        return;
    }

    if (numRoutes < 1 || numRoutes > destinations.length) {
        alert('A quantidade de rotas deve ser no mínimo 1 e no máximo igual ao número de destinos.');
        return;
    }

    var addresses = [origin].concat(destinations);
    var geocodePromises = addresses.map(function(address) {
        return geocode(address);
    });

    // Aguarda todas as geocodificações serem concluídas
    $.when.apply($, geocodePromises).then(function() {
        var geocodedResults = Array.prototype.slice.call(arguments);
        var originResult = geocodedResults[0];
        var destinationResults = geocodedResults.slice(1);

        // Preparar dados para a API do VROOM
        var vroomData = {
            "vehicles": [],
            "jobs": []
        };

        // Adiciona os veículos (rotas)
        for (var i = 0; i < numRoutes; i++) {
            vroomData.vehicles.push({
                "id": i + 1,
                "start": originResult.coordinates.map(Number),
                "capacity": [1]
            });
        }

        // Adiciona os trabalhos (destinos)
        destinationResults.forEach(function(destResult, index) {
            vroomData.jobs.push({
                "id": index + 1,
                "location": destResult.coordinates.map(Number),
                "delivery": [1]
            });
        });

        // Chama a API do VROOM
        optimizeRoutes(vroomData).done(function(vroomResponse) {
            if (vroomResponse && vroomResponse.routes) {
                // Limpa rotas e marcadores anteriores
                if (window.currentRoutes) {
                    window.currentRoutes.forEach(function(routeLayer) {
                        map.removeLayer(routeLayer);
                    });
                    window.currentRoutes = [];
                }
                if (window.markers) {
                    window.markers.forEach(function(marker) {
                        map.removeLayer(marker);
                    });
                    window.markers = [];
                }

                // Exibe informações da rota
                var totalDistance = (vroomResponse.summary.unassigned ? 0 : vroomResponse.summary.distance / 1000).toFixed(2);
                $('#routeInfo').html('<h5>Distância total: ' + totalDistance + ' km</h5>');

                // Exibe as rotas no mapa
                displayOptimizedRoutes(vroomResponse, geocodedResults);

                // Exibe tabela com detalhes das rotas
                displayRouteTable(vroomResponse, geocodedResults);

                // Exibe botão de download
                $('#downloadBtn').show();

                // Evento de download
                $('#downloadBtn').off('click').on('click', function() {
                    var format = prompt('Escolha o formato para download: xls, pdf ou txt', 'pdf');
                    if (format === 'pdf') {
                        generatePDF(vroomResponse, geocodedResults, totalDistance);
                    } else if (format === 'xls' || format === 'xlsx') {
                        generateXLS(vroomResponse, geocodedResults, totalDistance);
                    } else if (format === 'txt') {
                        generateTXT(vroomResponse, geocodedResults, totalDistance);
                    } else {
                        alert('Formato inválido.');
                    }
                });
            } else {
                alert('Erro na otimização das rotas.');
            }
        }).fail(function(error) {
            console.error('Erro na chamada ao VROOM:', error);
            alert('Erro na otimização das rotas.');
        });
    }).fail(function(error) {
        console.error('Erro na geocodificação:', error);
    });
});

// Função para chamar a API do VROOM
function optimizeRoutes(vroomData) {
    return $.ajax({
        url: 'https://vroom.project-osrm.org/',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(vroomData)
    });
}

// Função para exibir as rotas otimizadas no mapa
function displayOptimizedRoutes(vroomResponse, geocodedResults) {
    var colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
    var origin = geocodedResults[0];

    vroomResponse.routes.forEach(function(route, routeIndex) {
        // Obter a cor para esta rota
        var color = colors[routeIndex % colors.length];

        // Converter a geometria da rota em um objeto GeoJSON
        var routeGeoJSON = polyline.toGeoJSON(route.geometry);

        // Adicionar a rota no mapa
        var routeLayer = L.geoJSON(routeGeoJSON, {
            style: {
                color: color,
                weight: 5,
                opacity: 0.7
            }
        }).addTo(map);
        window.currentRoutes.push(routeLayer);

        // Adicionar marcadores numerados para cada ponto da rota
        var steps = route.steps;
        steps.forEach(function(step, stepIndex) {
            var sequence = stepIndex + 1;
            var coordinates = [step.location[1], step.location[0]]; // [lat, lon]

            var marker = L.marker(coordinates, {
                icon: L.divIcon({
                    className: 'numbered-marker',
                    html: sequence,
                    iconSize: [30, 30],
                    iconAnchor: [15, 30],
                    popupAnchor: [0, -30],
                    bgPos: [0, 0]
                })
            }).addTo(map);

            marker.bindPopup('Rota ' + (routeIndex + 1) + ': ' + (sequence === 1 ? 'Origem' : 'Destino'));

            window.markers.push(marker);
        });
    });

    // Ajusta o mapa para mostrar todas as rotas
    var allCoords = [].concat.apply([], vroomResponse.routes.map(function(route) {
        return polyline.decode(route.geometry);
    }));
    var bounds = L.latLngBounds(allCoords.map(function(coord) {
        return [coord[0], coord[1]];
    }));
    map.fitBounds(bounds);
}

// Função para exibir a tabela de rotas
function displayRouteTable(vroomResponse, geocodedResults) {
    // Limpa tabela anterior, se existir
    $('#routeTable').remove();

    // Cria a tabela
    var table = $('<table id="routeTable" class="table table-bordered mt-3"></table>');
    var thead = $('<thead><tr><th>Rota</th><th>Sequência</th><th>Endereço</th></tr></thead>');
    var tbody = $('<tbody></tbody>');

    vroomResponse.routes.forEach(function(route, routeIndex) {
        route.steps.forEach(function(step, stepIndex) {
            var sequence = stepIndex + 1;
            var address = '';

            if (sequence === 1) {
                address = geocodedResults[0].address; // Origem
            } else {
                var jobId = step.job;
                var job = vroomResponse.jobs.find(function(j) { return j.id === jobId; });
                var destResult = geocodedResults.find(function(result) {
                    return result.coordinates[0] === job.location[0] && result.coordinates[1] === job.location[1];
                });
                address = destResult ? destResult.address : 'Destino desconhecido';
            }

            var row = $('<tr></tr>');
            row.append('<td>' + (routeIndex + 1) + '</td>');
            row.append('<td>' + sequence + '</td>');
            row.append('<td>' + address + '</td>');

            tbody.append(row);
        });
    });

    table.append(thead);
    table.append(tbody);
    $('#routeInfo').append(table);
}

// Função para gerar arquivo PDF
function generatePDF(vroomResponse, geocodedResults, totalDistance) {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Roteirização de Entregas', 10, 15);
    doc.setFontSize(12);
    doc.text('Distância total: ' + totalDistance + ' km', 10, 25);

    var startY = 35;

    vroomResponse.routes.forEach(function(route, routeIndex) {
        doc.setFontSize(14);
        doc.text('Rota ' + (routeIndex + 1), 10, startY);
        startY += 10;

        doc.setFontSize(12);
        route.steps.forEach(function(step, stepIndex) {
            var sequence = stepIndex + 1;
            var address = '';

            if (sequence === 1) {
                address = geocodedResults[0].address; // Origem
            } else {
                var jobId = step.job;
                var job = vroomResponse.jobs.find(function(j) { return j.id === jobId; });
                var destResult = geocodedResults.find(function(result) {
                    return result.coordinates[0] === job.location[0] && result.coordinates[1] === job.location[1];
                });
                address = destResult ? destResult.address : 'Destino desconhecido';
            }

            var text = sequence + '. ' + address;
            doc.text(text, 10, startY);
            startY += 10;

            if (startY > 280) { // Se a página estiver cheia, adiciona uma nova
                doc.addPage();
                startY = 15;
            }
        });

        startY += 10;
    });

    doc.save('rotas.pdf');
}

// Função para gerar arquivo XLSX
function generateXLS(vroomResponse, geocodedResults, totalDistance) {
    var wb = XLSX.utils.book_new();
    var ws_data = [
        ['Roteirização de Entregas'],
        ['Distância total:', totalDistance + ' km'],
        []
    ];

    vroomResponse.routes.forEach(function(route, routeIndex) {
        ws_data.push(['Rota ' + (routeIndex + 1)]);
        ws_data.push(['Sequência', 'Endereço']);
        route.steps.forEach(function(step, stepIndex) {
            var sequence = stepIndex + 1;
            var address = '';

            if (sequence === 1) {
                address = geocodedResults[0].address; // Origem
            } else {
                var jobId = step.job;
                var job = vroomResponse.jobs.find(function(j) { return j.id === jobId; });
                var destResult = geocodedResults.find(function(result) {
                    return result.coordinates[0] === job.location[0] && result.coordinates[1] === job.location[1];
                });
                address = destResult ? destResult.address : 'Destino desconhecido';
            }

            ws_data.push([sequence, address]);
        });
        ws_data.push([]);
    });

    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Rotas');
    XLSX.writeFile(wb, 'rotas.xlsx');
}

// Função para gerar arquivo TXT
function generateTXT(vroomResponse, geocodedResults, totalDistance) {
    var content = 'Roteirização de Entregas\n';
    content += 'Distância total: ' + totalDistance + ' km\n\n';

    vroomResponse.routes.forEach(function(route, routeIndex) {
        content += 'Rota ' + (routeIndex + 1) + '\n';
        route.steps.forEach(function(step, stepIndex) {
            var sequence = stepIndex + 1;
            var address = '';

            if (sequence === 1) {
                address = geocodedResults[0].address; // Origem
            } else {
                var jobId = step.job;
                var job = vroomResponse.jobs.find(function(j) { return j.id === jobId; });
                var destResult = geocodedResults.find(function(result) {
                    return result.coordinates[0] === job.location[0] && result.coordinates[1] === job.location[1];
                });
                address = destResult ? destResult.address : 'Destino desconhecido';
            }

            content += sequence + '. ' + address + '\n';
        });
        content += '\n';
    });

    var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'rotas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
