// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdWHCg_ZBvB_UKudr0XVaNGGDMrDoRUD8",
  authDomain: "auth-tut-e69af.firebaseapp.com",
  projectId: "auth-tut-e69af",
  storageBucket: "auth-tut-e69af.appspot.com",
  messagingSenderId: "770787006543",
  appId: "1:770787006543:web:dea88d0e677d54f1c0323a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);