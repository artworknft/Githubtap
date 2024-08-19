// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDET-60uDu5bm7BFFsBJO8AjMI2h832oVY",
  authDomain: "cuan-test-357e5.firebaseapp.com",
  projectId: "cuan-test-357e5",
  storageBucket: "cuan-test-357e5.appspot.com",
  messagingSenderId: "413998882799",
  appId: "1:413998882799:web:01c9c369e56b4b32c8201a"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };
