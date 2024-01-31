import React, { useContext,useState } from 'react'
import UserContext from '../Context/UserContext'



// isme hum dekhenge data kaise send kre apne storeroom me (UserContext.js me)
function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext);//ye setUser Context/UserContextProvider.jsx file ke hook ka method hai

    const handleSubmit = (e)=>{
      e.preventDefault();//ye server me directly submit krne se prevent krne ke liye use kiya h

      setUser({username,password});//dekho yha se humne setUser method jo UserContexProvider.jsx ke andar usestate hook se banaya tha usi hook ka use krke humne user ke andar data dala hai

    }

  return (
    <div>
        <h2>Login</h2>
        <input
        type='text'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        placeholder='Username'
        />

        <input
        type='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='Password'
        />

        <button 
        onClick={handleSubmit}
        >Submit 
        </button>

    </div>
  )
}

export default Login