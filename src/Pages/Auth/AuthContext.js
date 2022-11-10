import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
export const UserContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    console.log(user)
    const handleSign = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handele Log in function 
    const handleLog = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // handle sign out 
    const handleOut = () => {
        signOut(auth).then(() => {

        })
    }
    // user context value 
    const info = {
        handleSign,
        handleLog,
        handleFb,
        user,
        handleOut,
        loading
    }
    return (
        <div>
            <UserContext.Provider value={info}>
                {children}
            </UserContext.Provider>

        </div>
    );
};

export default AuthContext;