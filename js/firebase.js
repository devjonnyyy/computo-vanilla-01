import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2RHTLuFVA-lBjSClcZxPH6a_XW76kBUA",
    authDomain: "javp-dicis.firebaseapp.com",
    projectId: "javp-dicis",
    storageBucket: "javp-dicis.firebasestorage.app",
    messagingSenderId: "550568883359",
    appId: "1:550568883359:web:a3d84624a8ef47d1595eaa",
    measurementId: "G-9FYL8V0QTG"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)