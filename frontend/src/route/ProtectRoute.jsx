import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectRoute = ({children}) => {
   let {isLoggedin }= useSelector(state=>state.user)
   console.log(isLoggedin)
   if(!isLoggedin){
    return  <Navigate to="/login" replace />
   }
  return children
}

export default ProtectRoute