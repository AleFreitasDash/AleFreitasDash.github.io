// Função para atualizar informações do usuário
document.getElementById('update-info-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    if (user) {
        const nome = document.getElementById('nome').value;
        const contato = document.getElementById('contato').value;
        const enderecoResidencial = document.getElementById('endereco-residencial').value;
        const enderecoEmpresa = document.getElementById('endereco-empresa').value;
        const cnpj = document.getElementById('cnpj').value;
        const userRef = firebase.database().ref('users/' + user.uid);
        userRef.update({
            nome,
            contato,
            enderecoResidencial,
            enderecoEmpresa,
            cnpj
        }).then(() => {
            loadUserData(user.uid); // Recarregar dados do usuário
        });
    }
});
