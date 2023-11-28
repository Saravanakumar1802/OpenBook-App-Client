// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { KEY } from "../url";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${KEY}`,
    authDomain: "mern-book-inventory-saravana.firebaseapp.com",
    projectId: "mern-book-inventory-saravana",
    storageBucket: "mern-book-inventory-saravana.appspot.com",
    messagingSenderId: "28135717447",
    appId: "1:28135717447:web:d56f115f648fdbf9f20f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;