import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams();
  return (
    <div className=' bg-slate-500 text-yellow-200 text-3xl'>This is user: {userid} </div>
  )
}

export default User;