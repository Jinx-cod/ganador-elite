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

// 4. Real Sign-In Logic
const loginForm = document.getElementById('login-form');

if(loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = e.target.querySelector('button');

        // Visual feedback: Dim the button while loading
        btn.innerText = "VERIFYING...";
        btn.style.opacity = "0.5";

        try {
            // This is the magic line that talks to Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            console.log("Welcome, Ganador:", user.email);
            
            // Success! Fade out the login card
            document.querySelector('.login-card').style.opacity = "0";
            setTimeout(() => {
                alert("Welcome to the Elite. Access Granted.");
                // Here is where we will load the main dashboard next
            }, 500);

        } catch (error) {
            console.error("Login Failed:", error.message);
            alert("Access Denied: Please check your credentials.");
            btn.innerText = "SIGN IN";
            btn.style.opacity = "1";
        }
    });
}
