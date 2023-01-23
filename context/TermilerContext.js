import { createContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebase.config"


const TermilerContext=createContext();

const TermilerProvider=({children})=>{
    const [users, setUsers]=useState([])
    const [posts, setPosts]=useState([])

    useEffect(( )=>{
        const getUsers = async ()=>{
            const querySnapshot = await getDocs(collection(db, 'users'));
            querySnapshot.docs.map(doc=>console.log(doc))
        }

        getUsers()

    },[]);

    return (
        

    // <TermilerContext.Provider
    // value={{posts, users}}
    
    // > {children} </TermilerContext.Provider>
    
    )

}

export {TermilerContext, TermilerProvider};