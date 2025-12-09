
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todoList:[],
  
}

export const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            console.log(action)
            console.log("todo add to list ==>")
            state.todoList= [...state.todoList,action.payload]
          
        },

        deleteTodo:(state,action)=>{
            console.log(action)
          state.todoList =  state.todoList.filter((val)=> val._id != action.payload)
        },
        
        isDone:(state,action)=>{
            console.log(action)
            state.todoList.map((val)=>{
                if(val._id == action.payload){
                
                    val.isDone = !val.isDone
                }
            })
        },


        editTodo:(state,action)=>{
            console.log(action)
            state.todoList.forEach((val)=>{
                if(val._id == action.payload.id){
                    val.task = action.payload.task
                    val.date = action.payload.date
                }
            })
        },


        setTodos:(state,action)=>{
            console.log(action.payload)
            state.todoList = action.payload
        }
    }
})

export const {addTodo,deleteTodo,isDone,editTodo,setTodos} = todoSlice.actions
export default todoSlice.reducer