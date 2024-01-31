import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'//yha pe me useLoader hook use kr rha hu kyuki mujhe data jaldi chahiye jb bhi api call ho

// yha pe mujhe apne github ke followers show krne hai to api call krni pdegi  
function Github() {

    // const [data,setData] = useState([])

    const data = useLoaderData();//ab data hawa me to aayega nhi useLoader hook use hi isi ke liye hua hai

    // useEffect(()=>{
    //  fetch('https://api.github.com/users/aayussh004')
    //  .then((response)=>{
    //    return response.json();
    //  })
    //  .then((data)=>{
    //    console.log(data)
    //    return setData(data);//data ke andar variable inject krne ke liye usestate use kr rhe hai hum
    //  })
    // },[])


  return (
    <>
    <div className=' text-center m-4 bg-gray-500 text-black text-3xl'>Github username: {data.login}</div>
    <div className=' text-center m-4 bg-gray-500 text-black text-3xl'>Github followers: {data.followers}</div>
    <div className=' text-center m-4 bg-gray-500 text-black text-3xl'>Github followings: {data.following}</div>
    </>
  )
}

export default Github

export const Githubinfoloader = async ()=>{
  const response = await fetch('https://api.github.com/users/aayussh004');
  return response.json();
}
// yha pe mene data kuch iss prakar load kiya hai ki jb bhi user Github me mouse hover kr rha hoga usi time pe me api call krdu backend se aur data fetch hona start ho jaaye aur jb wo click kre turant hi data user ko mil jaaye to mene apni api call optimize krli

//to phle ye call main.jsx me load hogi phir uska data yha ke data ke andar useLoader hook se aayega aur phir div ke andar load hoga 