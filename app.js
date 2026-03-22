import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvM2sEQAru0MMpohPv8g0A61phXPJjxyA",
    authDomain: "ganador-elite.firebaseapp.com",
    projectId: "ganador-elite",
    storageBucket: "ganador-elite.firebasestorage.app",
    messagingSenderId: "489718460397",
    appId: "1:489718460397:web:4914a8e62a17b2d2ef81e4"
};

// 2. Initialize Firebase & Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. The Luxury Reveal Logic
window.addEventListener('DOMContentLoaded', () => {
    // Show curtains for 2.5 seconds to build suspense
    setTimeout(() => {
        document.body.classList.add('reveal');
        
        const content = document.getElementById('app-content');
        if(content) {
            content.classList.remove('hidden');
            content.classList.add('visible');
        }
    }, 2500);
});

// 4. Placeholder for the Sign-In Function
// We will build the full logic for this once we have the UI inputs ready!
const loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Elite Login Attempted...");
    });
}
