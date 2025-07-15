// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// config بتاعك من Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAR097Ku4oMZnKFJVNdPljRtpzxxrFGVjk",
    authDomain: "task-acfe0.firebaseapp.com",
    projectId: "task-acfe0",
    storageBucket: "task-acfe0.appspot.com", // ✅ خلي بالك: كان عندك خطأ هنا (firebasestorage.app ❌)
    messagingSenderId: "508038327291",
    appId: "1:508038327291:web:ac25ac605245015d05395e",
    measurementId: "G-D2PLFDJN0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
