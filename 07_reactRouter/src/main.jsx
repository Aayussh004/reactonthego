import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { Githubinfoloader } from './components/Github/Github'


// yha pe hume App.jsx ki zarurat hi nhi hai
//hum yha router use krenge to uske liye router banana pdega ye ek array of objects leta hai
//aur mujhe home har page me chahiye to uske liye mene Layout.jsx banaya hai

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path: "about",
//         element: <About/>
//       },{
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }  
// ])

// we have a second method to create routers

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={Githubinfoloader}//this call is for optimizing the api call so to get data faster iski implementation Github.jsx me hai
     path='github'
      element={<Github/>}/>
    </Route>
      //  yha pe me userid le rha hu yhi userid meri User.jsx me hai, mujhe userid ka use krna hai us file ke andar to userid ko as a parameter maan lo  synatax is: "path/:parameter"  
      // website url me jaa kr /user ye likhoge to kuch nhi aayega wha pe /user/"Ayush"  ye likhna pdega kyuki parameter bhi to dena hai na 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
