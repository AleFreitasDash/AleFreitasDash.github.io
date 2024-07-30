import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const displayName = user.displayName || "Usuário";
        document.getElementById('user-name1').innerText = displayName;
        document.getElementById('user-name2').innerText = "Olá, " + displayName;

        const userId = user.uid;
        const userRef = ref(database, 'UserProfile/' + userId);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                document.getElementById('user-name').innerText = userData.Nome;
                document.getElementById('edit-name').value = userData.Nome;
                document.getElementById('user-phone').innerText = userData.Telefone;
                document.getElementById('edit-phone').value = userData.Telefone;
                document.getElementById('user-email').innerText = userData.Email;
                document.getElementById('edit-email').value = userData.Email;
                document.getElementById('user-cpf-cnpj').innerText = userData.CPF + ' / ' + userData.CNPJ;
                document.getElementById('edit-cpf-cnpj').value = userData.CPF + ' / ' + userData.CNPJ;
                document.getElementById('user-razao-social').innerText = userData.RazaoSocial;
                document.getElementById('edit-razao-social').value = userData.RazaoSocial;
                document.getElementById('user-nome-fantasia').innerText = userData.NomeFantasia;
                document.getElementById('edit-nome-fantasia').value = userData.NomeFantasia;
            }
        });

        const notificationsRef = ref(database, 'notifications/' + userId);
        onValue(notificationsRef, (snapshot) => {
            const notifications = snapshot.val();
            const notificationContainer = document.getElementById('notification-container');
            notificationContainer.innerHTML = '';
            if (notifications) {
                for (let key in notifications) {
                    const notification = notifications[key];
                    const li = document.createElement('li');
                    li.innerHTML = `<h6 class="mb-1">${notification.title}</h6>\n<small class="d-block">${notification.content}</small>`;
                    notificationContainer.appendChild(li);
                }
            }
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const field = button.getAttribute('data-field');
                document.getElementById(`user-${field}`).style.display = 'none';
                document.getElementById(`edit-${field}`).style.display = 'block';
                document.getElementById('save-changes').style.display = 'block';
            });
        });

        document.getElementById('save-changes').addEventListener('click', () => {
            const updatedData = {
                Nome: document.getElementById('edit-name').value,
                Telefone: document.getElementById('edit-phone').value,
                Email: document.getElementById('edit-email').value,
                CPF: document.getElementById('edit-cpf-cnpj').value.split(' / ')[0],
                CNPJ: document.getElementById('edit-cpf-cnpj').value.split(' / ')[1],
                RazaoSocial: document.getElementById('edit-razao-social').value,
                NomeFantasia: document.getElementById('edit-nome-fantasia').value
            };

            update(ref(database, 'UserProfile/' + userId), updatedData).then(() => {
                document.getElementById('save-changes').style.display = 'none';
                document.querySelectorAll('input').forEach(input => {
                    input.style.display = 'none';
                });
                document.querySelectorAll('p[id^="user-"]').forEach(p => {
                    p.style.display = 'block';
                });
            }).catch((error) => {
                console.error('Erro ao atualizar dados:', error);
            });
        });
    } else {
        window.location.href = 'page-login.html';
    }
});

document.getElementById('logout').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'page-login.html';
    }).catch((error) => {
        console.error('Erro ao realizar logout:', error);
    });
});
