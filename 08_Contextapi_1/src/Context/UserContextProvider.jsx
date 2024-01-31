import React, { useState } from 'react'
import UserContext from './UserContext'//ye function UserContext.js file se imported hai, isi ka provider bna ke bech rhe hai hum


// this is the method which acts as a storeroom for every component to use the variables stored in it 
// bcoz this file acts as a global file to everyone so tht har insaan yha se apne kaam ka variable utha ke le jaaye

const UserContextProvider = ({children}) => { //children wo log hai jo iske variables use krne wale hai mtlb janta
     const [user, setUser] = useState(null)
    return(

    //ye jo neeche wala wrap hai ye maan ke chlo ki ek global wrapper hai, jo har kisi ko available hoga and jo isme parameters diye hai (user, setuser) yhi wo values hai jo ki janta ko available hone wali hai
<UserContext.Provider value={{user,setUser}} >
 {children}
</UserContext.Provider>
)
}


export default UserContextProvider

//aur ye ban gya hamara storeroom