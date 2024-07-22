// Função para carregar dados do usuário
function loadUserData(userId) {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            const infoNome = document.getElementById('info-nome');
            const infoContato = document.getElementById('info-contato');
            const infoEnderecoResidencial = document.getElementById('info-endereco-residencial');
            const infoEnderecoEmpresa = document.getElementById('info-endereco-empresa');
            const infoNomeEmpresa = document.getElementById('info-nome-empresa');
            const infoCnpj = document.getElementById('info-cnpj');

            if (infoNome) infoNome.innerText = data.nome || '';
            if (infoContato) infoContato.innerText = data.contato || '';
            if (infoEnderecoResidencial) infoEnderecoResidencial.innerText = data.enderecoResidencia || '';
            if (infoEnderecoEmpresa) infoEnderecoEmpresa.innerText = data.enderecoEmpresa || '';
            if (infoNomeEmpresa) infoNomeEmpresa.innerText = data.nomeEmpresa || '';
            if (infoCnpj) infoCnpj.innerText = data.cnpj || '';
        }
    });
}
