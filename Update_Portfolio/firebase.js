// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPT5Ndhp7qQVWa5ZAP7rL63pOiOx9vc4I",
    authDomain: "awais-saddiqui.firebaseapp.com",
    projectId: "awais-saddiqui",
    storageBucket: "awais-saddiqui.firebasestorage.app",
    messagingSenderId: "781486998783",
    appId: "1:781486998783:web:14236c3a2d5b29262bf8ca",
    measurementId: "G-VZYKTZ9PNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);