import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
 

  // for using react-redux go to redux toolkit get started and run npm commands to install redux and react-redux
  return (
    <>
      <div>
       <h1>Learn about redux toolkit</h1>
       <AddTodo/>
       <Todos/>
       </div>
    </>
  )
}

export default App
