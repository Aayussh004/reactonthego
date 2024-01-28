import { useState } from "react"
import "./App.css"
function App() {

  let [counter,setCounter] = useState(0);
  // let counter = 0;
  
  const addme = ()=>{
    setCounter(counter+1);
  }

  const removeme= ()=>{
    if(counter==0)return;
    setCounter(counter-1);
  }

  return (
    < >
  
    <h1>This is Vite project for counter</h1>
    <p>In this project if you try to change counter value by direclty using onclick function on button it will not simulate changes on UI but its changing</p>
    <p>That's what react is saying: if you want changes in UI ask my permission aur mere hisab se chalo</p>
    <p>So yha hum hooks ka use krenge kyuki hume react ke hisab se chlna hai</p>
    <h3>Here is your counter value: {counter}</h3>
    <button onClick={addme}>Add in counter</button>
    <br/>
    <button onClick={removeme}>Remove in counter</button>
    
    </>
  )
}

export default App
