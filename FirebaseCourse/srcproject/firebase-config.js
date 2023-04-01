// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAbcPf7jTB6wjp-X2mzd8gvch7NjEUcN0w",
  authDomain: "fir-tut-1f9bf.firebaseapp.com",
  projectId: "fir-tut-1f9bf",
  storageBucket: "fir-tut-1f9bf.appspot.com",
  messagingSenderId: "263154326798",
  appId: "1:263154326798:web:33db1c0118b7f90d514b5f",
  measurementId: "G-66VZRQC99G"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)