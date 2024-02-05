import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// dekho redux ek core library hai aur react-redux alg hota hai jo ki redux ka implementation hai taaki redux ki react ke saath wiring ho ske
// redux toolkit se kaafi kaam automate hote hai, 


// /app/store.js
// aapko sbse phle store banana hai phir jise single source of truth bolte hai

//features/todo/todoSlice.js
// ab reducer ka role aata hai to wo slice (features banata hai)
// slice banane ke liye simple createSlice import kro aur usme teen chiz lagti hai: name, uski initialState(by default kesa hoga), phir reducer jisme saare functions ki implementation ho ab har function me do params hote hai state and action=>
// state means jo bhi current state hai phir action means jo bhi data hai state ke andar
//ab saare reducer functions ko export kro agr 10 hai to daso ko kro kyuki konsi file me konsa reducer lge koi bharosa
// ab saare reducer jo bne hai wo ek variable me stored hai createSlice wale me to usko bhi variable.reducer bolke export krdo

// ab redux me do chize hoti hai useSelector and useDispatch
// useDispatch jb aapko koi changes krne ho storeroom me thst's why Components/Addtodo me sirf dispatch use hua hai
// useSelector jb storeroom se koi value utha ke laani ho and in Components/Todos me aapko saare todo ko list krne hai to selector use kiya aur remove krne ke liye dispatch