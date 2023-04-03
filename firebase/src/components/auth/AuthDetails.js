import React, {useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {

const [authUser,setAuthUser] = useState(null)


useEffect(() => {

    const listen = onAuthStateChanged(auth,(user) => {
        if(user) {
            setAuthUser(user)
        }else{
            setAuthUser(null)
        }
    })

    return () => {
        listen()
    }
},[])

const SignOut = () => {

    signOut(auth).then(() => {
        console.log("sign out successfull")
      
    }).catch(error => console.log(error))
}


  return (
    <div>
        {
            authUser? <p>{`Signed in as: ${authUser.email}`}</p> : <p>Signed Out</p>
        }
        <button onClick={SignOut}>Sign Out</button>
    </div>
  )
}

export default AuthDetails