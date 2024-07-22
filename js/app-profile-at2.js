// Função para alterar senha
document.getElementById('change-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    const email = document.getElementById('email').value;
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;

    const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);

    user.reauthenticateWithCredential(credential).then(() => {
        user.updatePassword(newPassword).then(() => {
            alert('Password atualizado com sucesso!');
        }).catch((error) => {
            console.error('Erro ao atualizar o password:', error);
        });
    }).catch((error) => {
        console.error('Erro ao reautenticar o usuário:', error);
    });
});
