// Função para salvar post
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
            loadUserPosts(user.uid, 'posts-container'); // Recarregar posts
            loadNotifications(user.uid, 'notification-container'); // Recarregar notificações
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        });
    }
});
