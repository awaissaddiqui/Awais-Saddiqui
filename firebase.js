// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const { VITE_REACT_APP_API_KEY, VITE_REACT_APP_AUTH, VITE_REACT_APP_PROJECT_ID, VITE_REACT_APP_STORAGE, VITE_REACT_APP_MESSAGE, VITE_REACT_APP_APP_ID, VITE_REACT_APP_MEASUREMENT } = import.meta.env;
const firebaseConfig = {
    apiKey: VITE_REACT_APP_API_KEY,
    authDomain: VITE_REACT_APP_AUTH,
    projectId: VITE_REACT_APP_PROJECT_ID,
    storageBucket: VITE_REACT_APP_STORAGE,
    messagingSenderId: VITE_REACT_APP_MESSAGE,
    appId: VITE_REACT_APP_APP_ID,
    measurementId: VITE_REACT_APP_MEASUREMENT
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);