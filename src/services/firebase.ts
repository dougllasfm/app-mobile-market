import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOIKCAoTMI24SHSDGpBKv8tgkjpLZmItw",
  authDomain: "app-mercado-ed79b.firebaseapp.com",
  projectId: "app-mercado-ed79b",
  storageBucket: "app-mercado-ed79b.appspot.com",
  messagingSenderId: "606544910178",
  appId: "1:606544910178:web:0faee29e45235e65fefe3b",
  measurementId: "G-L3HHHFRZXR",
};

// async function create() {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();