import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//outelet ky krta hai jo bhi iske andar hoga wo change hota rhega but iske upr aur niche ke component same hi rhenge

function Layout() {
  return (
   <> 
   <Header/>
   <Outlet/>
   {/* //ye aapko main.jsx me jaake router ke andar jo bhi path hai usko dedega jaise ki About wala path */}
   <Footer/>
   </>
  )
}

export default Layout