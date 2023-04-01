import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'

function SignUp() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const onInputData = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev, 
            [name]: value
        }))
    } 

    /// firebase sign up 
    const FireSignUp = () => {
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredentials) => {
                console.log(userCredentials.user)
            }).catch((err) => {
                console.log(err.message)
            })
    }


  return (
      <div>
          <h1>Sign Up</h1>
          <input type="email" name="email" id="" placeholder="Email" onChange={onInputData} value={form.email} />
          <input type="password" name="password" id="" placeholder='Password' onChange={onInputData}  value={form.password}/>
          <button onClick={FireSignUp}>sign up</button>
          
          {form.email} ... {form.password}
      </div>
  )
}

export default SignUp