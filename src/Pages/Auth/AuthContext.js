import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
export const UserContext = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {

    return (
        <div>


        </div>
    );
};

export default AuthContext;