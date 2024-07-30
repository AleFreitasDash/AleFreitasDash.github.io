  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  // Your web app's Firebase configuration
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Add login event
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Login successful');
        window.location.href = 'index.html'; // redirect to home page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  });