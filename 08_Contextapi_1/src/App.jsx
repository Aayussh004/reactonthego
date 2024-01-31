import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
 

  // ab mujhe UserContexProvide.jsx file ko saari janta ko provide krana hai isiliye uska wrapper use kr rha hu 
  return (
    <UserContextProvider>
     <h1>This is the App file which is using UserContextProvider storeroom</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
