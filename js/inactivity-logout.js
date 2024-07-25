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
    inactivityTimeout = setTimeout(logoutUser, 1 * 60 * 1000); // 1 hora
};

const initializeInactivityHandler = () => {
    window.onload = resetInactivityTimeout;
    document.onmousemove = resetInactivityTimeout;
    document.onkeydown = resetInactivityTimeout;
    document.onscroll = resetInactivityTimeout;
    document.onclick = resetInactivityTimeout;
};

export { initializeInactivityHandler, logoutUser };
