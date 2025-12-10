import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAction } from '../features/actions/userAction'
import { useNavigate } from "react-router-dom";


const Header = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const { user } = useSelector((state) => state.user)

    const logoutHandler = async () => {
        try {
            console.log("logout working.")
           let response = await dispatch(logoutUserAction())
           console.log("response of logout user ==>",response)
            navigate("/login")
        } catch (error) {
            console.log("error in logout handler.==>", error)
        }
    }

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">

                {/* Left Section */}
                <h1 className="text-xl font-semibold text-gray-800">
                    Welcome, <span className="text-blue-600">{user?.userName}</span>
                </h1>

                {/* Right Section */}
                <button
                    onClick={logoutHandler}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow 
                               transition-all duration-300"
                >
                    Logout
                </button>

            </div>
        </header>
    )
}

export default Header
