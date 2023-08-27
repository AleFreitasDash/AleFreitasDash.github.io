gapi.load('client', function() {
    gapi.client.init({
        apiKey: 'AIzaSyAxGbdWe639fXoxSAnogiMC_sJBFn5uXsk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        document.getElementById("buscarButton").addEventListener("click", buscarInformacoes);
        document.getElementById("atualizarButton").addEventListener("click", atualizarTipoVeiculo);
    });
});

function buscarInformacoes() {
    const chave = document.getElementById("chaveInput").value;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1I4GB6KQVa_6254wcguR4BzG8FQn96slmWy0usPmxW5k',
        range: 'SITE!D:AM',
    }).then(response => {
        const values = response.result.values;
        if (values && values.length > 0) {
            for (let i = 0; i < values.length; i++) {
                if (values[i][0] === chave) {
                    document.getElementById("planilha").innerText = values[i][0];
                    document.getElementById("embarque").innerText = values[i][1];
                    document.getElementById("status").innerText = values[i][2];
                    document.getElementById("quemContratou").innerText = values[i][3];
                    document.getElementById("motorista").innerText = values[i][4];
                    document.getElementById("destinoFinal").innerText = values[i][5];
                    document.getElementById("cidadesEntrega").innerText = values[i][6];
                    document.getElementById("km").innerText = values[i][7];

                    // Criar e adicionar o elemento select para o tipo de veículo
                    const tipoVeiculoSelect = document.createElement("select");
                    tipoVeiculoSelect.id = "tipoVeiculo";
                    tipoVeiculoSelect.innerHTML = `
                        <option value="VUC">VUC</option>
                        <option value="3/4">3/4</option>
                        <option value="TOCO">TOCO</option>
                    `;
                    tipoVeiculoSelect.value = values[i][8]; // Definir o valor atual
                    document.getElementById("veiculo").innerHTML = "";
                    document.getElementById("veiculo").appendChild(tipoVeiculoSelect);

                    // Restante das atribuições de valores

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

function atualizarTipoVeiculo() {
    const chave = document.getElementById("chaveInput").value;
    const novoTipo = document.getElementById("tipoVeiculo").value;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1I4GB6KQVa_6254wcguR4BzG8FQn96slmWy0usPmxW5k',
        range: 'SITE!A:D', // Supondo que os valores procurados estão nas colunas A a D
    }).then(response => {
        const values = response.result.values;
        for (let i = 0; i < values.length; i++) {
            if (values[i][0] === chave) {
                const columnIndexToUpdate = 7; // Coluna H (8ª coluna) para o tipo de veículo
                values[i][columnIndexToUpdate] = novoTipo;
                atualizarCelula(values[i], columnIndexToUpdate);
                return;
            }
        }
    }, error => {
        console.error('Erro ao buscar informações:', error);
    });
}

function atualizarCelula(row, columnIndex) {
    // Use a API do Google Sheets para atualizar o valor da célula
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: '1I4GB6KQVa_6254wcguR4BzG8FQn96slmWy0usPmxW5k',
        range: `SITE!${String.fromCharCode(65 + columnIndex)}${row[0]}`, // A célula a ser atualizada (por exemplo, H2)
        valueInputOption: 'RAW',
        values: [[row[columnIndex]]]
    }).then(response => {
        console.log('Valor atualizado no Google Sheets:', response);
    }, error => {
        console.error('Erro ao atualizar valor:', error);
    });
}
