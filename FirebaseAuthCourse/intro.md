# go to firebase website 

#  create project 

# disable google analytics for that project ... not needed ... 

 - Click ... Authentication 
 - click .... Get Started ....Indicate what kind of auth you'll be using ... 

 - Email/Password   ... for this tutorial 

  - enable Email/Password 

  - save

# Project settions 

where you can see api keys and use them to intergrate in our react projects 

store them in a password manager


# firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

# ....................


#  https://firebase.google.com/docs/web/setup#available-libraries

click ....

Authentication for Web
import { } from 'firebase/auth';

# 


