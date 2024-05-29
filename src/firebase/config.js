import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAclqfw6P8Lq_AV0e7M35fcYYf0CFE7hPY",
  authDomain: "crud-practica-85a27.firebaseapp.com",
  projectId: "crud-practica-85a27",
  storageBucket: "crud-practica-85a27.appspot.com",
  messagingSenderId: "674279356053",
  appId: "1:674279356053:web:8596a3702f2a176d710d9c",
  measurementId: "G-0V4SC7ZFFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // Exportar storage



