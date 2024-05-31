import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut  } from "firebase/auth";
import app from '../firebase/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () =>{
     signInWithPopup(auth, provider)
     .then(result =>{
        const loggedInuser = result.user;
        console.log(loggedInuser);
        setUser(loggedInuser);
     })
     .catch(error =>{
        console.log('error', error.message)
     })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>login</button>
            <button onClick={handleSignOut}>signout</button>
           { user &&  <div>
                <h3>User:{user.displayName}</h3>
            </div>}
        </div>
    );
};

export default Login;