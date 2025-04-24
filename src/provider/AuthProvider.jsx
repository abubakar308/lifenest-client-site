import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebaseconfig/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()

    const createuser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }


    const signIn = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
    }

    const googlesignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            if(currentUser?.email){
                setUser(currentUser)
            }
        })
        return () => {
            return unsubscribe()
          }
    }, []);

    const userInfo = {
        user,
        setUser,
        loading,
        createuser,
        signIn,
        googlesignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;