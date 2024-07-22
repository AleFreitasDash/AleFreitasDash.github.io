// Função para excluir post
function deletePost(userId, postId) {
    const postRef = firebase.database().ref('avisos/' + userId + '/' + postId);
    postRef.remove().then(() => {
        loadUserPosts(userId, 'posts-container'); // Recarregar posts
        loadNotifications(userId, 'notification-container'); // Recarregar notificações
    }).catch((error) => {
        console.error('Erro ao excluir o post:', error);
    });
}
