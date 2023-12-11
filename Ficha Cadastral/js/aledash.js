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
                                    document.getElementById("placadoveiculo").innerText = values[i][0];
document.getElementById("iddousuarioblip").innerText = values[i][1];
document.getElementById("statusdoregistroetapaconcluida").innerText = values[i][2];
document.getElementById("veiculo").innerText = values[i][3];
document.getElementById("capacidadedepeso").innerText = values[i][4];
document.getElementById("quantidadepallets").innerText = values[i][5];
document.getElementById("bau").innerText = values[i][6];
document.getElementById("rastreador").innerText = values[i][7];
document.getElementById("cpfmotorista").innerText = values[i][8];
document.getElementById("nomecompletomotorista").innerText = values[i][9];
document.getElementById("rgmotorista").innerText = values[i][10];
document.getElementById("orgaoemissormotorista").innerText = values[i][11];
document.getElementById("dataemissaorgmotorista").innerText = values[i][12];
document.getElementById("cidadeemissaorgmotorista").innerText = values[i][13];
document.getElementById("nacionalidademotorista").innerText = values[i][14];
document.getElementById("naturalidademotorista").innerText = values[i][15];
document.getElementById("datadenascimentomotorista").innerText = values[i][16];
document.getElementById("sexomotorista").innerText = values[i][17];
document.getElementById("nomepaimotorista").innerText = values[i][18];
document.getElementById("nomemaemotorista").innerText = values[i][19];
document.getElementById("fotocnhmotorista").innerText = values[i][20];
document.getElementById("numcnhmotorista").innerText = values[i][21];
document.getElementById("cidadeemissaocnhmotorista").innerText = values[i][22];
document.getElementById("dataemissaocnhmotorista").innerText = values[i][23];
document.getElementById("datavencimentocnhmotorista").innerText = values[i][24];
document.getElementById("categoriacnhmotorista").innerText = values[i][25];
document.getElementById("cepmotorista").innerText = values[i][26];
document.getElementById("enderecoruamotorista").innerText = values[i][27];
document.getElementById("enderecobairromotorista").innerText = values[i][28];
document.getElementById("enderecocidademotorista").innerText = values[i][29];
document.getElementById("enderecoufmotorista").innerText = values[i][30];
document.getElementById("endereconumeromotorista").innerText = values[i][31];
document.getElementById("enderecocomplementomotorista").innerText = values[i][32];
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
document.getElementById("numplacadoveiculo").innerText = values[i][46];
document.getElementById("chassidoveiculo").innerText = values[i][47];
document.getElementById("renavamdoveiculo").innerText = values[i][48];
document.getElementById("certificadodoveiculo").innerText = values[i][49];
document.getElementById("modelodoveiculo").innerText = values[i][50];
document.getElementById("cidadedeemissaododocumentodoveiculo").innerText = values[i][51];
document.getElementById("datadeemissaododocumentodoveiculo").innerText = values[i][52];
document.getElementById("anodomodelodoveiculo").innerText = values[i][53];
document.getElementById("anodefabricacaodoveiculo").innerText = values[i][54];
document.getElementById("pessoalegaldoveiculo").innerText = values[i][55];
document.getElementById("nomedoproprietariodoveiculo").innerText = values[i][56];
document.getElementById("documentodoproprietariodoveiculo").innerText = values[i][57];
document.getElementById("rntrcdoveiculo").innerText = values[i][58];
document.getElementById("datadevalidadedorntrcdoveiculo").innerText = values[i][59];
document.getElementById("cepdoproprietariodoveiculo").innerText = values[i][60];
document.getElementById("enderecodoproprietariodoveiculo").innerText = values[i][61];
document.getElementById("bairrodoproprietariodoveiculo").innerText = values[i][62];
document.getElementById("cidadedoproprietariodoveiculo").innerText = values[i][63];
document.getElementById("estadodoproprietariodoveiculo").innerText = values[i][64];
document.getElementById("numeroresidenciadoproprietariodoveiculo").innerText = values[i][65];
document.getElementById("complementodoenderecodoproprietariodoveiculo").innerText = values[i][66];
document.getElementById("nomedopaidoproprietariodoveiculo").innerText = values[i][67];
document.getElementById("nomedamaedoproprietariodoveiculo").innerText = values[i][68];
document.getElementById("nomedoproprietariodaantt").innerText = values[i][69];
document.getElementById("documentodoproprietariodaantt").innerText = values[i][70];
document.getElementById("rgdoproprietariodaantt").innerText = values[i][71];
document.getElementById("pisdoproprietariodaantt").innerText = values[i][72];
document.getElementById("rntrcdoproprietariodaantt").innerText = values[i][73];
document.getElementById("enderecodoproprietariodaantt").innerText = values[i][74];
document.getElementById("bairrodoproprietariodaantt").innerText = values[i][75];
document.getElementById("cidadedoproprietariodaantt").innerText = values[i][76];
document.getElementById("estadodoproprietariodaantt").innerText = values[i][77];
document.getElementById("cepdoproprietariodaantt").innerText = values[i][78];
document.getElementById("numeroresidenciadoproprietariodaantt").innerText = values[i][79];
document.getElementById("complementodoenderecodoproprietariodaantt").innerText = values[i][80];
document.getElementById("telefonedoproprietariodaantt").innerText = values[i][81];
document.getElementById("emaildoproprietariodaantt").innerText = values[i][82];
document.getElementById("numerodaagenciadoproprietariodaantt").innerText = values[i][83];
document.getElementById("numerodacontabancariadoproprietariodaantt").innerText = values[i][84];
document.getElementById("numplacadacarreta").innerText = values[i][85];
document.getElementById("chassidacarreta").innerText = values[i][86];
document.getElementById("renavamdacarreta").innerText = values[i][87];
document.getElementById("certificadodacarreta").innerText = values[i][88];
document.getElementById("modelodacarreta").innerText = values[i][89];
document.getElementById("cidadedeemissaododocumentodacarreta").innerText = values[i][90];
document.getElementById("datadeemissaododocumentodacarreta").innerText = values[i][91];
document.getElementById("anodomodelodacarreta").innerText = values[i][92];
document.getElementById("anodefabricacaodacarreta").innerText = values[i][93];
document.getElementById("pessoalegaldacarreta").innerText = values[i][94];
document.getElementById("nomedoproprietariodacarreta").innerText = values[i][95];
document.getElementById("documentodoproprietariodacarreta").innerText = values[i][96];
document.getElementById("rntrcdacarreta").innerText = values[i][97];
document.getElementById("datadevalidadedorntrcdacarreta").innerText = values[i][98];
document.getElementById("cepdoproprietariodacarreta").innerText = values[i][99];
document.getElementById("enderecodoproprietariodacarreta").innerText = values[i][100];
document.getElementById("bairrodoproprietariodacarreta").innerText = values[i][101];
document.getElementById("cidadedoproprietariodacarreta").innerText = values[i][102];
document.getElementById("estadodoproprietariodacarreta").innerText = values[i][103];
document.getElementById("numeroresidenciadoproprietariodacarreta").innerText = values[i][104];
document.getElementById("complementodoenderecodoproprietariodacarreta").innerText = values[i][105];
document.getElementById("nomedopaidoproprietariodacarreta").innerText = values[i][106];
document.getElementById("nomedamaedoproprietariodacarreta").innerText = values[i][107];
document.getElementById("nomedoproprietariodaanttdacarreta").innerText = values[i][108];
document.getElementById("documentodoproprietariodaanttdacarreta").innerText = values[i][109];
document.getElementById("rgdoproprietariodaanttdacarreta").innerText = values[i][110];
document.getElementById("pisdoproprietariodaanttdacarreta").innerText = values[i][111];
document.getElementById("rntrcdoproprietariodaanttdacarreta").innerText = values[i][112];
document.getElementById("enderecodoproprietariodaanttdacarreta").innerText = values[i][113];
document.getElementById("bairrodoproprietariodaanttdacarreta").innerText = values[i][114];
document.getElementById("cidadedoproprietariodaanttdacarreta").innerText = values[i][115];
document.getElementById("estadodoproprietariodaanttdacarreta").innerText = values[i][116];
document.getElementById("cepdoproprietariodaanttdacarreta").innerText = values[i][117];
document.getElementById("numeroresidenciadoproprietariodaanttdacarreta").innerText = values[i][118];
document.getElementById("complementodoenderecodoproprietariodaanttdacarreta").innerText = values[i][119];
document.getElementById("telefonedoproprietariodaanttdacarreta").innerText = values[i][120];
document.getElementById("emaildoproprietariodaanttdacarreta").innerText = values[i][121];
document.getElementById("numerodaagenciadoproprietariodaanttdacarreta").innerText = values[i][122];
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
