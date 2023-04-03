import React, {useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      console.log(userCredentials)
    }).catch((err) => console.log(err))
 
  }
  
    return (
     <div>
      <form>
          <h1>Log In to your Account</h1>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input type='password' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type='submit' onClick={signIn}>Sign In</button>
      </form>
     </div>
    )
  }

  export default SignIn
