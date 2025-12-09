import { axiosInstance } from "../../config/axiosInstance"
import { addTodo, deleteTodo, editTodo, isDone } from "../todo.silce"



export   const addTodoAction =({task,date})=> async(dispatch)=> {
    try {
console.log({task,date})
  let response = await axiosInstance.post("/todo/create",{task,date})
  console.log(response)
        if(response){
           await dispatch(addTodo(response.data.item))
        }
    } catch (error) {
        console.log("error in addtodo action ===>",error)
    }
}

export const deteleTodoAction = (data)=> async(dispatch)=>{
    try {
        // console.log(data)
        let response = await axiosInstance.post("/todo/delete", {id:data} )
        console.log(response)
        if(response){
            dispatch(deleteTodo(data))
        }
    } catch (error) {
        console.log("error in delete todo item ===>")
    }
}


export const todoToggleController = (data)=>async(dispatch)=>{
   try {
    let response = await axiosInstance.patch("/todo/toggle",{id:data})
    console.log(response)
    if(response){
        dispatch(isDone(data))
    }
   } catch (error) {
    console.log("error in toggle todo ===>",error)
   }
}


export const editTodoController =(data)=> async (dispatch)=>{
   try {
    console.log(data)
    let response = await axiosInstance.patch("/todo/update", data)
    if(response){
        dispatch(editTodo(data))
    }
    
   } catch (error) {
     console.log("error in updadte  todo ===>",error)
   }
}


