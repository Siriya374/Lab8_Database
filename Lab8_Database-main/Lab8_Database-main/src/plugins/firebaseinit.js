// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDvHlFAGW9EFf0PVAXjCewCWZU6mU7i4aM",
  authDomain: "lab-25-2-2565.firebaseapp.com",
  projectId: "lab-25-2-2565",
  storageBucket: "lab-25-2-2565.appspot.com",
  messagingSenderId: "566959005801",
  appId: "1:566959005801:web:a98ce3f0525358354c82f8",
  measurementId: "G-QP46DHHHFM",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
