gapi.load('client', function() {
            gapi.client.init({
                apiKey: 'AIzaSyAxGbdWe639fXoxSAnogiMC_sJBFn5uXsk',
                discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            }).then(function() {
                document.getElementById("buscarButton").addEventListener("click", buscarInformacoes);
            });
        });

        function buscarInformacoes() {
            const chave = document.getElementById("chaveInput").value;
            
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1FGQFL04OoclymsoGV5okUp_mw_Pkjq9uHJa0Yr9l3ps',
                range: 'VEICULO!A:DS',
            }).then(response => {
                const values = response.result.values;
                if (values && values.length > 0) {
                    for (let i = 0; i < values.length; i++) {
                        if (values[i][0] === chave) {
document.getElementById("cpfmotorista").innerText = values[i][8];
document.getElementById("nomecompletomotorista").innerText = values[i][9];
document.getElementById("rgmotorista").innerText = values[i][10];
document.getElementById("orgaoemissormotorista").innerText = values[i][11];
document.getElementById("dataemissaorgmotorista").innerText = values[i][12];
                            return; // Encerra o loop após encontrar a chave
                        }
                    }
                    document.getElementById("status").innerText = "Planilha não encontrada.";
                } else {
                    document.getElementById("status").innerText = "Nenhum dado encontrado.";
                }
            }, response => {
                console.error('Erro ao buscar informações:', response.result.error.message);
            });
        }
