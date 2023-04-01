import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

function AuthCredentials() {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
      
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user)
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    //     return () => {
    //     listen()
    // }
      
    }, [])


    // Sign Out

    const SignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out was successful ..")
            }).catch(err => console.log(err.message))
    }
    
    return (
        <>
             <h1>Auth Credentials</h1>
      <div>
          
          {authUser ? <h2>Signed In : {authUser.email} <button onClick={SignOut}>logout</button></h2> : <h2>Signed Out  </h2>}
            </div>
            </>
  )
}

export default AuthCredentials