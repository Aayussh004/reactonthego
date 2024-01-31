import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


// isme humne storeroom se data kaise lena hai wo seekha hai
function Profile() {

    const {user} = useContext(UserContext)//yha pe me UserContextProvider.jsx wali file ka user le rha hu kyuki mujhe data fetch krna hai storeroom se to setUser() method to lunga nhi

    if(!user){
        return <div>User not logged in: Please Login</div>
    }
    else{
        return (
        <div>Welcome {user.username}</div>//ye mene apne storeroom ke user se data fetch kr liya hai
  )
}
}

export default Profile