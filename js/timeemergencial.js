// Variável global para guardar o ID do intervalo da contagem regressiva
    var countdownIntervalId;

    // Função que inicia a contagem regressiva
    function startCountdown(duration, display) {
        var timer = duration, minutes, seconds;
        countdownIntervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    // Evento que inicia ou reinicia a contagem regressiva ao clicar no botão
    document.getElementById("start-button").addEventListener("click", function() {
        var twentyMinutes = 20 * 60;
        var display = document.querySelector("#countdown");
        // Se a contagem já estiver em andamento, interrompa o intervalo e comece do início
        if (countdownIntervalId) {
            clearInterval(countdownIntervalId);
        }
        startCountdown(twentyMinutes, display);
    });