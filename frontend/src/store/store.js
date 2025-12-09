import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo.silce"
import userReducer from "../features/user.slice"


export const store = configureStore({
    reducer:{
        todo:todoReducer,
        user :userReducer
    }
})