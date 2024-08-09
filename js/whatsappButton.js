// whatsappButton.js
"use strict";

function addWhatsAppButton(phoneNumber, message) {
    // Cria o botão
    var whatsAppButton = `<style>.waloader {  display: flex;  bottom: 20px;  right: 20px;  width: 5em;  height: 5em;  padding: 15px;  justify-content: center;  align-items: center;  position: fixed;  z-index: 99999;  cursor: pointer;  scale: 0.5;}.waloader i {  font-size: 70px;}.central {  display: flex;  justify-content: center;  align-items: center;  position: relative;  width: 10em;  height: 10em;  border-radius: 50%;  box-shadow: 0.5em 1em 1em #fff,    -0.5em 0.5em 1em #fff,    0.5em -0.5em 1em white,    -0.5em -0.5em 1em #fff;}.external-shadow {  width: 10em;  height: 10em;  border-radius: 50%;  display: flex;  justify-content: center;  align-items: center;  position: relative;  box-shadow: 0.5em 0.5em 3em #fff,    -0.5em 0.5em 3em #fff,    0.5em -0.5em 3em white,    -0.5em -0.5em 3em #fff;  z-index: 999;  animation: rotate 3s linear infinite;  background-color: #25d366;}.intern {  position: absolute;  color: white;  z-index: 9999;}@keyframes rotate {  0% {    transform: rotate(0deg);  }  50% {    transform: rotate(180deg);  }  100% {    transform: rotate(360deg);  }}</style><div class="waloader">      <div class="intern">	  <i class='fab fa-whatsapp'></i>      </div>  <div class="external-shadow">    <div class="central">    </div>  </div></div>`;

    // Adiciona o botão ao corpo do documento
    if ($("#whatsappButton").length == 0) {
        $("body").append(whatsAppButton);

        // Adiciona evento de clique para abrir o WhatsApp
        $(".waloader").on("click", function () {
            var url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    }

    // Adiciona o link do Font Awesome para os ícones
    var fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(fontAwesomeLink);
}

// Inicializa o botão do WhatsApp quando o documento estiver pronto
$(document).ready(function () {
    // Substitua pelo número de telefone e mensagem desejados
    var phoneNumber = "5519997283346";
    var message = "Olá! Gostaria de mais informações.";
    addWhatsAppButton(phoneNumber, message);
});
