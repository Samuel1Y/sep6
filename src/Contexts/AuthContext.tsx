import React, { useContext, useEffect, useState } from 'react'
import { User, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase';

interface AuthContextProps {
    currentUser: User | null;
    error: string;
    signUp: (username: string, email: string, password: string) => Promise<string>;
    signIn: (email: string, password: string) => Promise<string>;
    logout: () => void;
    forgotPassword: (email: string) => void;
  }
interface AuthProviderProps {
    children: React.ReactNode
  }
  
export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);
export const useAuth = () => useContext(AuthContext)

export function AuthProvider( {children}: AuthProviderProps) {

    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const currUser = auth.onAuthStateChanged((authUser) => {
            setCurrentUser(authUser)
        })
        return currUser
    },[])

    function signUp(username: string, email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            if (userCredential.user) {
              updateProfile(userCredential.user, {
                  displayName: username
              })
          }
            return ''
          })
          .catch((error) => {
            setError(error.code)
            console.log(error.message)
            return error.message
          })
    }

    function signIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            return ''
          })
          .catch((error) => {
            setError(error.code)
            console.log(error.message)
            return error.message
          });
    }

    function logout() {
        return signOut(auth)
    }

    function forgotPassword(email: string) {
        return sendPasswordResetEmail(auth, email)
    }

    const value: AuthContextProps = {
        currentUser,
        error,
        logout,
        signIn,
        signUp,
        forgotPassword,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        )
}