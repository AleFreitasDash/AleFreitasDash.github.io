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
                            document.getElementById("placadoveículo").innerText = values[i][0];
document.getElementById("iddousuárioblip").innerText = values[i][1];
document.getElementById("statusdoregistroetapaconcluída").innerText = values[i][2];
document.getElementById("veículo").innerText = values[i][3];
document.getElementById("capacidadedepeso").innerText = values[i][4];
document.getElementById("quantidadepallets").innerText = values[i][5];
document.getElementById("baú").innerText = values[i][6];
document.getElementById("rastreador").innerText = values[i][7];
document.getElementById("cpfmotorista").innerText = values[i][8];
document.getElementById("nomecompletomotorista").innerText = values[i][9];
document.getElementById("rgmotorista").innerText = values[i][10];
document.getElementById("orgãoemissormotorista").innerText = values[i][11];
document.getElementById("dataemissãorgmotorista").innerText = values[i][12];
document.getElementById("cidadeemissãorgmotorista").innerText = values[i][13];
document.getElementById("nacionalidademotorista").innerText = values[i][14];
document.getElementById("naturalidademotorista").innerText = values[i][15];
document.getElementById("datadenascimentomotorista").innerText = values[i][16];
document.getElementById("sexomotorista").innerText = values[i][17];
document.getElementById("nomepaimotorista").innerText = values[i][18];
document.getElementById("nomemãemotorista").innerText = values[i][19];
document.getElementById("fotocnhmotorista").innerText = values[i][20];
document.getElementById("numcnhmotorista").innerText = values[i][21];
document.getElementById("cidadeemissãocnhmotorista").innerText = values[i][22];
document.getElementById("dataemissãocnhmotorista").innerText = values[i][23];
document.getElementById("datavencimentocnhmotorista").innerText = values[i][24];
document.getElementById("categoriacnhmotorista").innerText = values[i][25];
document.getElementById("cepmotorista").innerText = values[i][26];
document.getElementById("endereçoruamotorista").innerText = values[i][27];
document.getElementById("endereçobairromotorista").innerText = values[i][28];
document.getElementById("endereçocidademotorista").innerText = values[i][29];
document.getElementById("endereçoufmotorista").innerText = values[i][30];
document.getElementById("endereçonumeromotorista").innerText = values[i][31];
document.getElementById("endereçocomplementomotorista").innerText = values[i][32];
document.getElementById("telefonecelularmotorista").innerText = values[i][33];
document.getElementById("pessoa1motorista").innerText = values[i][34];
document.getElementById("pessoa1nomemotorista").innerText = values[i][35];
document.getElementById("pessoa1telefonemotorista").innerText = values[i][36];
document.getElementById("pessoa1cidademotorista").innerText = values[i][37];
document.getElementById("pessoa2motorista").innerText = values[i][38];
document.getElementById("pessoa2nomemotorista").innerText = values[i][39];
document.getElementById("pessoa2telefonemotorista").innerText = values[i][40];
document.getElementById("pessoa2cidademotorista").innerText = values[i][41];
document.getElementById("pessoa3motorista").innerText = values[i][42];
document.getElementById("pessoa3nomemotorista").innerText = values[i][43];
document.getElementById("pessoa3telefonemotorista").innerText = values[i][44];
document.getElementById("pessoa3cidademotorista").innerText = values[i][45];
document.getElementById("numplacadoveículo").innerText = values[i][46];
document.getElementById("chassidoveículo").innerText = values[i][47];
document.getElementById("renavamdoveículo").innerText = values[i][48];
document.getElementById("certificadodoveículo").innerText = values[i][49];
document.getElementById("modelodoveículo").innerText = values[i][50];
document.getElementById("cidadedeemissãododocumentodoveículo").innerText = values[i][51];
document.getElementById("datadeemissãododocumentodoveículo").innerText = values[i][52];
document.getElementById("anodomodelodoveículo").innerText = values[i][53];
document.getElementById("anodefabricaçãodoveículo").innerText = values[i][54];
document.getElementById("pessoalegaldoveículo").innerText = values[i][55];
document.getElementById("nomedoproprietáriodoveículo").innerText = values[i][56];
document.getElementById("documentodoproprietáriodoveículo").innerText = values[i][57];
document.getElementById("rntrcdoveículo").innerText = values[i][58];
document.getElementById("datadevalidadedorntrcdoveículo").innerText = values[i][59];
document.getElementById("cepdoproprietáriodoveículo").innerText = values[i][60];
document.getElementById("endereçodoproprietáriodoveículo").innerText = values[i][61];
document.getElementById("bairrodoproprietáriodoveículo").innerText = values[i][62];
document.getElementById("cidadedoproprietáriodoveículo").innerText = values[i][63];
document.getElementById("estadodoproprietáriodoveículo").innerText = values[i][64];
document.getElementById("númeroresidenciadoproprietáriodoveículo").innerText = values[i][65];
document.getElementById("complementodoendereçodoproprietáriodoveículo").innerText = values[i][66];
document.getElementById("nomedopaidoproprietáriodoveículo").innerText = values[i][67];
document.getElementById("nomedamãedoproprietáriodoveículo").innerText = values[i][68];
document.getElementById("nomedoproprietáriodaantt").innerText = values[i][69];
document.getElementById("documentodoproprietáriodaantt").innerText = values[i][70];
document.getElementById("rgdoproprietáriodaantt").innerText = values[i][71];
document.getElementById("pisdoproprietáriodaantt").innerText = values[i][72];
document.getElementById("rntrcdoproprietáriodaantt").innerText = values[i][73];
document.getElementById("endereçodoproprietáriodaantt").innerText = values[i][74];
document.getElementById("bairrodoproprietáriodaantt").innerText = values[i][75];
document.getElementById("cidadedoproprietáriodaantt").innerText = values[i][76];
document.getElementById("estadodoproprietáriodaantt").innerText = values[i][77];
document.getElementById("cepdoproprietáriodaantt").innerText = values[i][78];
document.getElementById("númeroresidênciadoproprietáriodaantt").innerText = values[i][79];
document.getElementById("complementodoendereçodoproprietáriodaantt").innerText = values[i][80];
document.getElementById("telefonedoproprietáriodaantt").innerText = values[i][81];
document.getElementById("emaildoproprietáriodaantt").innerText = values[i][82];
document.getElementById("númerodaagenciadoproprietáriodaantt").innerText = values[i][83];
document.getElementById("númerodacontabancáriadoproprietáriodaantt").innerText = values[i][84];
document.getElementById("numplacadacarreta").innerText = values[i][85];
document.getElementById("chassidacarreta").innerText = values[i][86];
document.getElementById("renavamdacarreta").innerText = values[i][87];
document.getElementById("certificadodacarreta").innerText = values[i][88];
document.getElementById("modelodacarreta").innerText = values[i][89];
document.getElementById("cidadedeemissãododocumentodacarreta").innerText = values[i][90];
document.getElementById("datadeemissãododocumentodacarreta").innerText = values[i][91];
document.getElementById("anodomodelodacarreta").innerText = values[i][92];
document.getElementById("anodefabricaçãodacarreta").innerText = values[i][93];
document.getElementById("pessoalegaldacarreta").innerText = values[i][94];
document.getElementById("nomedoproprietáriodacarreta").innerText = values[i][95];
document.getElementById("documentodoproprietáriodacarreta").innerText = values[i][96];
document.getElementById("rntrcdacarreta").innerText = values[i][97];
document.getElementById("datadevalidadedorntrcdacarreta").innerText = values[i][98];
document.getElementById("cepdoproprietáriodacarreta").innerText = values[i][99];
document.getElementById("endereçodoproprietáriodacarreta").innerText = values[i][100];
document.getElementById("bairrodoproprietáriodacarreta").innerText = values[i][101];
document.getElementById("cidadedoproprietáriodacarreta").innerText = values[i][102];
document.getElementById("estadodoproprietáriodacarreta").innerText = values[i][103];
document.getElementById("númeroresidenciadoproprietáriodacarreta").innerText = values[i][104];
document.getElementById("complementodoendereçodoproprietáriodacarreta").innerText = values[i][105];
document.getElementById("nomedopaidoproprietáriodacarreta").innerText = values[i][106];
document.getElementById("nomedamãedoproprietáriodacarreta").innerText = values[i][107];
document.getElementById("nomedoproprietáriodaanttdacarreta").innerText = values[i][108];
document.getElementById("documentodoproprietáriodaanttdacarreta").innerText = values[i][109];
document.getElementById("rgdoproprietáriodaanttdacarreta").innerText = values[i][110];
document.getElementById("pisdoproprietáriodaanttdacarreta").innerText = values[i][111];
document.getElementById("rntrcdoproprietáriodaanttdacarreta").innerText = values[i][112];
document.getElementById("endereçodoproprietáriodaanttdacarreta").innerText = values[i][113];
document.getElementById("bairrodoproprietáriodaanttdacarreta").innerText = values[i][114];
document.getElementById("cidadedoproprietáriodaanttdacarreta").innerText = values[i][115];
document.getElementById("estadodoproprietáriodaanttdacarreta").innerText = values[i][116];
document.getElementById("cepdoproprietáriodaanttdacarreta").innerText = values[i][117];
document.getElementById("númeroresidênciadoproprietáriodaanttdacarreta").innerText = values[i][118];
document.getElementById("complementodoendereçodoproprietáriodaanttdacarreta").innerText = values[i][119];
document.getElementById("telefonedoproprietáriodaanttdacarreta").innerText = values[i][120];
document.getElementById("emaildoproprietáriodaanttdacarreta").innerText = values[i][121];
document.getElementById("númerodaagenciadoproprietáriodaanttdacarreta").innerText = values[i][122];
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
