import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>This is the application using vite+react</h3>
      <ol>
        <li>Yha pe aapko src me .jsx file milegi but in create-react-app me hume .js file milti thi</li>
        <li>Vite is lighter than create-react-app framework</li>
        <li>run "npm run dev" on terminal to start vite server</li>
      </ol>
    </>
  )
}

export default App
