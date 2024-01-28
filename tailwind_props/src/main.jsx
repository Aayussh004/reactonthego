import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Components/Card.jsx'

const obj={
  name:"Ayush",
  age:23
} 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
    <Card  username="hello Ayush" myobj={obj} />
    <Card username="hello Aisha" />
    <Card username="hello Flipkart"/>
  </React.StrictMode>,
)
