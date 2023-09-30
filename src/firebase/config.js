// import * as firebase from "firebase/app";
// import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnigMP53aoxUZdwPtCvJWqANxZbluU5hY",
    authDomain: "my-first-firebase-projec-490d6.firebaseapp.com",
    projectId: "my-first-firebase-projec-490d6",
    storageBucket: "my-first-firebase-projec-490d6.appspot.com",
    messagingSenderId: "283888424290",
    appId: "1:283888424290:web:729ebfe5ef4b934e29083b"
};

// initializing firebase
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);


// initializing firestore service
// const projectFirestore = firebase.firestore()
const db = getFirestore(app)

// Importing those two is necessary coz they won't work automatically.


// Exporting it out so it can be used in any file/component
export { db }