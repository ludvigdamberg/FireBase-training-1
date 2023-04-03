import React, {useState} from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const SignUp = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const signUp = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredentials) => {
        console.log("Success!")
      }).catch((err) => console.log(err))
   
    }
    
      return (
       <div>
        <form>
            <h1>Create an Account</h1>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type='password' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit' onClick={signUp}>Sign Up</button>
        </form>
       </div>
      )
}

export default SignUp
