# https://console.firebase.google.com/


# create new project ..... 

- firebase-tut

#  analytics 

 - continue

 - defualt .


 - create project ... 


# Now we wish to connect the database project to a react app ..... 

 - project settings 

 - </> 

 - register our app
        (we do this because we a have to connect it to some code ...)

- same name as app ... 

- no hosting 

- click register app   


# .. create a file in the project to handle the connection  to the firebase project .....

firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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



# we have just established the connection ..... 

# we still need to ensure the creation of databases ..... 

# we need to create our "firestore" database     ... 

- click ... FireStore Database 
- click ..  Create  databse     ( allow all defaults .. production mode ...)
- choose datatabase location ....  europe , asia etc ..

- click ....... enable .... this creates and instance of the database in the cloud ...

# Click Rules to see what the database can do ... 
We can set 
 - read 
 - write  
    etc ...

# if we want a person to be able to do the crud ... we have to set it to true .... 

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
# .... allow read, write: if true;... enables read , write ......
# .... allow read, write: if false;... disables read , write ......
      allow read, write: if true;
    }
# ...........
  }
}


# At the Data section .... 
 - we will create the structure of the database ..... 


 # NB .. firestore is a no sqldatabse like mongodb .....


 # Now we can create  a collection and it's fields .... 

 # Now we need to ensure the connection ....

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore   } from "@firebase/firestore"


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


# ...........................

the db is populator with the firebase info from the app .... 

we need to access the db outside the app so we can make queries .... 

so we will export the db variable ...



# Read ...................from database .....















