import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            //jwt
            if(currentUser?.email){
                axios.post('https://tutor-nexus.vercel.app/jwt', 
                    {
                        email: currentUser?.email
                    },
                    {
                        withCredentials: true
                    }
                )
                .then(res => console.log(res.data))
                .catch(error => console.log(error))
            }
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authData = {
        loading,
        setLoading,
        signUpUser,
        updateUserProfile,
        signInUser,
        googleSignIn,
        signOutUser,
        user
    }

    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;