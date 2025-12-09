import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router'
import Register from '../components/authComponents/Register'
import LoginForm from '../components/authComponents/LoginForm'
import Todo from '../components/Todo'
import ProtectRoute from './ProtectRoute'


const AppRoute = () => {
  let {isLoggedin}  = useSelector(state =>state.user)
  console.log(isLoggedin)

  
  
  return (
    <div>
        <Routes>
            <Route path='/' element={   isLoggedin ? <Navigate to="/todo" replace /> : <Navigate to="/login" replace /> } />
        <Route path='/login' element={<LoginForm/> } />
        <Route path='/register' element={<Register/>}/>
      

        <Route path='/todo' element={
            <ProtectRoute>
              <Todo/>
               </ProtectRoute> } />
       
         <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

    </div>
  )
}

export default AppRoute