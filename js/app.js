firebase.auth().onAuthStateChanged(function(user) {
    if (user && user.displayName) {
        const userName1 = document.getElementById('user-name1');
        const userName2 = document.getElementById('user-name2');
        if (userName1) userName1.innerText = user.displayName;
        if (userName2) userName2.innerText = "Olá, " + user.displayName;

        loadUserData(user.uid);
        loadUserPosts(user.uid, 'posts-container');
        loadNotifications(user.uid, 'notification-container');
    } else {
        window.location.href = "page-login.html";
    }
});

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

// Função para carregar posts do usuário
function loadUserPosts(userId, containerId) {
    const postsRef = firebase.database().ref('notifications/' + userId);
    postsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const postsContainer = document.getElementById(containerId);
        if (postsContainer) {
            postsContainer.innerHTML = ''; // Limpar posts atuais
            if (data) {
                Object.keys(data).forEach(key => {
                    const post = data[key];
                    const postElement = document.createElement('div');
                    postElement.classList.add('profile-uoloaded-post', 'border-bottom-1', 'pb-5');
                    postElement.innerHTML = `
                        <h4>${post.title}</h4>
                        <p>${post.content}</p>
                        <button class="btn btn-danger" onclick="deletePost('${userId}', '${key}')">Excluir</button>
                    `;
                    postsContainer.appendChild(postElement);
                });
            }
        }
    });
}

// Função para excluir post
function deletePost(userId, postId) {
    const postRef = firebase.database().ref('notifications/' + userId + '/' + postId);
    postRef.remove().then(() => {
        loadUserPosts(userId, 'posts-container'); // Recarregar posts
        loadNotifications(userId, 'notification-container'); // Recarregar notificações
    }).catch((error) => {
        console.error('Erro ao excluir o post:', error);
    });
}

// Função para carregar notificações
function loadNotifications(userId, containerId) {
    const notificationsRef = firebase.database().ref('notifications/' + userId);
    notificationsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const notificationsContainer = document.getElementById(containerId);
        if (notificationsContainer) {
            notificationsContainer.innerHTML = ''; // Limpar notificações atuais
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

// Função para salvar post
document.getElementById('post-button').addEventListener('click', function() {
    const user = firebase.auth().currentUser;
    if (user) {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;
        const postRef = firebase.database().ref('notifications/' + user.uid).push();
        postRef.set({
            title: postTitle,
            content: postContent
        }).then(() => {
            loadUserPosts(user.uid, 'posts-container'); // Recarregar posts
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

// Função de logout
document.getElementById('logout').addEventListener('click', function() {
    firebase.auth().signOut().then(() => {
        window.location.href = "page-login.html";
    }).catch((error) => {
        console.error('Erro ao fazer logout:', error);
    });
});
