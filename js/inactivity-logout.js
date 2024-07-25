import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const auth = getAuth();
let inactivityTime = function () {
    let time;
    let logoutTimeout = 60000; // 1 minute

    // Reset the timer on any of the following events
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses
    window.ontouchstart = resetTimer;
    window.ontouchmove = resetTimer;
    window.onclick = resetTimer;     // catches touchpad clicks
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function logout() {
        signOut(auth).then(() => {
            window.location.href = 'page-login.html';
        }).catch((error) => {
            console.error('Erro ao realizar logout:', error);
        });
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, logoutTimeout);
    }
};

// Initialize inactivityTime
inactivityTime();
