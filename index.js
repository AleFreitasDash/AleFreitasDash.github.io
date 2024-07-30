import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
    
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

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("Error logging in:", error);
                alert("Error logging in: " + error.message);
            });
    });