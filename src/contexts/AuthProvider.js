import React, { createContext, useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
 
const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user ,setUser] = useState(null)
    const [ loding, setLoding] = useState(true)

  const createUser = (email, password)=>{
        setLoding(true)
       return createUserWithEmailAndPassword(auth,email,password)
  }

   const updateUserProfile = userProfile =>{
        setLoding(true)
    return updateProfile(auth.currentUser, userProfile)
   }

   const userLogin = (email,password)=>{
    setLoding(true)
    return signInWithEmailAndPassword(auth, email,password)
   }


   const userGoogleLogin = () =>{
     setLoding(true)
    return signInWithPopup(auth ,googleProvider)
   }


   const userLogout = ()=>{
    setLoding(true)
        return signOut(auth)
    }

  useEffect( ()=>{
      const unSubcrible = onAuthStateChanged(auth, (currentUser)=>{

          setUser(currentUser)
          setLoding(false)
      })
      return ()=> unSubcrible() 
  },[])


const authInfo = {
                   user,
                   loding,
                   createUser,
                   userLogin,
                   userGoogleLogin,
                   updateUserProfile,
                   userLogout
              }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;