import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCwE7-9BCn1_Oqriw6gKEH1oitFXOW4oNE",
    authDomain: "basededadossite-bb29b.firebaseapp.com",
    databaseURL: "https://basededadossite-bb29b-default-rtdb.firebaseio.com",
    projectId: "basededadossite-bb29b",
    storageBucket: "basededadossite-bb29b.appspot.com",
    messagingSenderId: "770564649369",
    appId: "1:770564649369:web:82ba6af1b55b9cc6ff2308",
    measurementId: "G-PY7SBTHNMR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cnpj = document.getElementById('cnpj').value;
    const razaoSocial = document.getElementById('razaoSocial').value;
    const nomeFantasia = document.getElementById('nomeFantasia').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, {
                displayName: name
            }).then(() => {
                const userId = user.uid;
                set(ref(database, 'UserProfile/' + userId), {
                    Nome: name,
                    Telefone: phone,
                    Email: email,
                    CPF: cpf,
                    CNPJ: cnpj,
                    RazaoSocial: razaoSocial,
                    NomeFantasia: nomeFantasia
                });
            });
        })
        .then(() => {
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error registering user:", error);
            alert("Error registering user: " + error.message);
        });
});
