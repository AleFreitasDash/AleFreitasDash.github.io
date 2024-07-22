firebase.auth().onAuthStateChanged(function(user) {
    if (user && user.displayName) {
        document.getElementById('user-name1').innerText = user.displayName;
        document.getElementById('user-name2').innerText = "Olá, " + user.displayName;
        loadUserData(user.uid);
        loadUserPosts(user.uid, 'posts-container');
        loadNotifications(user.uid, 'notification-container');
    } else {
        window.location.href = "page-login.html";
    }
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    firebase.auth().signOut().then(() => {
        window.location.href = "page-login.html";
    }).catch((error) => {
        console.error('Erro ao sair:', error);
    });
});

// Function to load user data
function loadUserData(userId) {
    const userRef = firebase.database().ref('users/' + userId);
    userRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            document.getElementById('info-nome').innerText = data.nome || '';
            document.getElementById('info-contato').innerText = data.contato || '';
            document.getElementById('info-endereco-residencial').innerText = data.enderecoResidencia || '';
            document.getElementById('info-endereco-empresa').innerText = data.enderecoEmpresa || '';
            document.getElementById('info-nome-empresa').innerText = data.nomeEmpresa || '';
            document.getElementById('info-cnpj').innerText = data.cnpj || '';
        }
    });
}

// Function to load user posts
function loadUserPosts(userId, containerId) {
    const postsRef = firebase.database().ref('avisos/' + userId);
    postsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const postsContainer = document.getElementById(containerId);
        if (postsContainer) {
            postsContainer.innerHTML = ''; // Clear current posts
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

// Function to delete post
function deletePost(userId, postId) {
    const postRef = firebase.database().ref('avisos/' + userId + '/' + postId);
    postRef.remove().then(() => {
        loadUserPosts(userId, 'posts-container'); // Reload posts
        loadNotifications(userId, 'notification-container'); // Reload notifications
    }).catch((error) => {
        console.error('Erro ao excluir o post:', error);
    });
}

// Function to save post
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
            loadUserPosts(user.uid, 'posts-container'); // Reload posts
            loadNotifications(user.uid, 'notification-container'); // Reload notifications
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        });
    }
});

// Function to load notifications
function loadNotifications(userId, containerId) {
    const notificationsRef = firebase.database().ref('avisos/' + userId);
    notificationsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const notificationsContainer = document.getElementById(containerId);
        if (notificationsContainer) {
            notificationsContainer.innerHTML = ''; // Clear current notifications
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

// Function to update user info
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
            loadUserData(user.uid); // Reload user data
        });
    }
});

// Function to change password
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
