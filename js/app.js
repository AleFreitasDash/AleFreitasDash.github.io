// Função para carregar avisos
function loadNotifications(userId, containerId) {
    const notificationsRef = firebase.database().ref('avisos/' + userId);
    notificationsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const notificationsContainer = document.getElementById(containerId);
        if (notificationsContainer) {
            notificationsContainer.innerHTML = ''; // Limpar notificações existentes
            if (data) {
                Object.keys(data).forEach(key => {
                    const notification = data[key];
                    const notificationElement = document.createElement('li');
                    notificationElement.innerHTML = `
                        <div class="timeline-panel">
                            <div class="media-body">
                                <h6 class="mb-1">${notification.title}</h6>
                                <small class="d-block">${notification.content}</small>
                            </div>
                        </div>
                    `;
                    notificationsContainer.appendChild(notificationElement);
                });
            }
        }
    });
}

// Função para carregar dados do usuário
function loadUserData(userId) {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            document.getElementById('user-name1').innerText = data.nome || '';
            document.getElementById('user-name2').innerText = "Olá, " + data.nome || '';
        }
    });
}

// Função para carregar postagens do usuário
function loadUserPosts(userId, containerId) {
    const postsRef = firebase.database().ref('avisos/' + userId);
    postsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const postsContainer = document.getElementById(containerId);
        if (postsContainer) {
            postsContainer.innerHTML = ''; // Limpar postagens existentes
            if (data) {
                Object.keys(data).forEach(key => {
                    const post = data[key];
                    const postElement = document.createElement('div');
                    postElement.classList.add('profile-uoloaded-post', 'border-bottom-1', 'pb-5');
                    postElement.innerHTML = `
                        <h4>${post.title}</h4>
                        <p>${post.content}</p>
                        <button class="btn btn-danger" onclick="deletePost('${userId}', '${key}', '${containerId}')">Excluir</button>
                    `;
                    postsContainer.appendChild(postElement);
                });
            }
        }
    });
}

// Função para excluir postagem
function deletePost(userId, postId, containerId) {
    const postRef = firebase.database().ref('avisos/' + userId + '/' + postId);
    postRef.remove().then(() => {
        loadUserPosts(userId, containerId); // Recarregar postagens
        loadNotifications(userId, 'notification-container'); // Recarregar notificações
    }).catch((error) => {
        console.error('Erro ao excluir o post:', error);
    });
}

// Função para salvar postagem
document.getElementById('post-button').addEventListener('click', function() {
    const user = firebase.auth().currentUser;
    if (user) {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;
        const postRef = firebase.database().ref('avisos/' + user.uid).push();
        postRef.set({
            title: postTitle,
            content: postContent
        }).then(() => {
            loadUserPosts(user.uid, 'posts-container'); // Recarregar postagens
            loadNotifications(user.uid, 'notification-container'); // Recarregar notificações
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        });
    }
});

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

// Função para alterar a senha
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

// Verificação de autenticação
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        loadUserData(user.uid);
        loadUserPosts(user.uid, 'posts-container');
        loadNotifications(user.uid, 'notification-container');
    } else {
        window.location.href = "page-login.html";
    }
});
