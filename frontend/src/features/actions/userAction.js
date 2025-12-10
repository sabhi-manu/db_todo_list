
import {axiosInstance}  from "../../config/axiosInstance"
import { addUser, removeUser } from "../user.slice"


export const addUserAction =(data)=> async (dispatch)=>{
      try {
        console.log("register data ===>",data)
            let response = await axiosInstance.post("/user/register", data)
            console.log(response.data.message)
            console.log(response)
               if (response) {
            dispatch(addUser(response.data.user))
             return response;
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

export const logoutUserAction = ()=>async(dispatch)=>{
  try {
     console.log("logout user action ==>")
    let response = await axiosInstance.post("/user/logout")
      console.log(response)
    if(response.status== 200){
      dispatch(removeUser())
      return response
    }
    
  } catch (error) {
    console.log("error in logout user action ====>",error)
  }
}