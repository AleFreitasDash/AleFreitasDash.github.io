<<<<<<< HEAD
// inactivity-logout.js
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const logoutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = 'page-login.html';
    }).catch((error) => {
        console.error('Erro ao realizar logout:', error);
    });
};

let inactivityTimeout;

const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(logoutUser, 1 * 1 * 1000); // 1 minuto para realizar os testes || para 1 hora 3600 * 1000
};

const initializeInactivityHandler = () => {
    resetInactivityTimeout(); // Inicializa o timeout
    window.onload = resetInactivityTimeout;
    document.onmousemove = resetInactivityTimeout;
    document.onkeydown = resetInactivityTimeout;
    document.onscroll = resetInactivityTimeout;
    document.onclick = resetInactivityTimeout;
    window.onbeforeunload = () => {
        // Marca a sessão como inativa no localStorage quando a aba é fechada
        localStorage.setItem('sessionActive', 'false');
    };
};

// Checa a sessão ativa quando a página é carregada
if (localStorage.getItem('sessionActive') === 'false') {
    logoutUser();
}

// Marca a sessão como ativa quando a página é carregada
localStorage.setItem('sessionActive', 'true');

export { initializeInactivityHandler, logoutUser };
=======
// inactivity-logout.js
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const logoutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = 'page-login.html';
    }).catch((error) => {
        console.error('Erro ao realizar logout:', error);
    });
};

let inactivityTimeout;

const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(logoutUser, 1 * 1 * 1000); // 1 minuto para realizar os testes || para 1 hora 3600 * 1000
};

const initializeInactivityHandler = () => {
    resetInactivityTimeout(); // Inicializa o timeout
    window.onload = resetInactivityTimeout;
    document.onmousemove = resetInactivityTimeout;
    document.onkeydown = resetInactivityTimeout;
    document.onscroll = resetInactivityTimeout;
    document.onclick = resetInactivityTimeout;
    window.onbeforeunload = () => {
        // Marca a sessão como inativa no localStorage quando a aba é fechada
        localStorage.setItem('sessionActive', 'false');
    };
};

// Checa a sessão ativa quando a página é carregada
if (localStorage.getItem('sessionActive') === 'false') {
    logoutUser();
}

// Marca a sessão como ativa quando a página é carregada
localStorage.setItem('sessionActive', 'true');

export { initializeInactivityHandler, logoutUser };
>>>>>>> 668cee79d8cfe798900a1f61d45144650c9519eb
