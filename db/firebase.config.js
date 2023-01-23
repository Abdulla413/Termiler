// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvhrXejIlymZrFrcg_f31gxo1QKvCUHsY",
  authDomain: "termiler-ca13e.firebaseapp.com",
  projectId: "termiler-ca13e",
  storageBucket: "termiler-ca13e.appspot.com",
  messagingSenderId: "788518824562",
  appId: "1:788518824562:web:629452bb9af599466cf0eb"
};



// Initialize Firebase
const app=initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider =new GoogleAuthProvider();
const db=getFirestore(app)



export {auth, provider, db} ;