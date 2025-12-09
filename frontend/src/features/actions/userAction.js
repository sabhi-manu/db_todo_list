
import {axiosInstance}  from "../../config/axiosInstance"
import { addUser, removeUser } from "../user.slice"


export const addUserAction =(data)=> async (dispatch)=>{
      try {
        console.log(data)
            let response = await axiosInstance.post("/user/register", data)
            console.log(response.data.message)
            console.log(response.data.user)
               if (response) {
            dispatch(addUser(response.data.user))
             return response.data;
               }
        
      } catch (error) {
        console.log("error in adduser action ===>",error)
        throw error
      }
}


export const loginUserAction = (data)=>async (dispatch)=>{
  try {
     console.log(data)
       console.log("Axios is calling:", axiosInstance.defaults.baseURL + "/user/login");
    let response = await axiosInstance.post("/user/login",data)

            console.log(response.data.message)
            console.log(response.data.user)

    if(response){
        dispatch(addUser(response.data.user))
         return response.data;
    }
  } catch (error) {
    console.log("error in login action ====>",error)
    throw error
  }
}

export const logoutUserAction = (data)=>async(dispatch)=>{
  try {

    let response = await axiosInstance.post("/user/logout",data)

      console.log(response.data.message)
            console.log(response.data.user)

    if(response){
      dispatch(removeUser(data))
    }
    
  } catch (error) {
    console.log("error in logout user action ====>",error)
  }
}