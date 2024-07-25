let inactivityTime = function () {
    let time;
    const logoutTimeout = 60000; // 1 minute
    const logoutButton = document.getElementById('logout');

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
        if (logoutButton) {
            logoutButton.click();
        }
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, logoutTimeout);
    }
};

// Initialize inactivityTime
inactivityTime();
