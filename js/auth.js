import { loadUserData } from './userData.js';
import { loadUserPosts } from './userPosts.js';
import { loadNotifications } from './notifications.js';

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

// Função de logout
document.getElementById('logout').addEventListener('click', function() {
    firebase.auth().signOut().then(() => {
        window.location.href = "page-login.html";
    }).catch((error) => {
        console.error('Erro ao fazer logout:', error);
    });
});
