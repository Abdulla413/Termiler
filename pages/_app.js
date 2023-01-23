import '../styles/globals.css'
import { useState, useEffect } from "react";
import { getDocs, collection } from 'firebase/firestore';
import db from '../db/firebase.config'

function MyApp({ Component, pageProps }) {


  useEffect(( )=>{
    const getUsers = async ()=>{
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.docs.map(doc=>console.log(doc))
        
    }

    getUsers()

},[]);

  return <div dir='rtl'>
 
  <Component {...pageProps} />
 

  </div>
  
  
}

export default MyApp
