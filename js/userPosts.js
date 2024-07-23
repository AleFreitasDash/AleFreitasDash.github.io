import { loadNotifications } from './notifications.js';

export function loadUserPosts(userId, containerId) {
    const postsRef = firebase.database().ref('avisos/' + userId);
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

export function deletePost(userId, postId) {
    const postRef = firebase.database().ref('avisos/' + userId + '/' + postId);
    postRef.remove().then(() => {
        loadUserPosts(userId, 'posts-container'); // Recarregar posts
        loadNotifications(userId, 'notification-container'); // Recarregar notificações
    }).catch((error) => {
        console.error('Erro ao excluir o post:', error);
    });
}
