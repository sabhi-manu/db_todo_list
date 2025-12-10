import { createSlice } from '@reduxjs/toolkit'



const initialState={
    user: null,
    isLoggedin: false,
    isError: null,

}

let userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action)
            state.user= action.payload;
            state.isLoggedin= true;
            state.isError= null;
        },
        removeUser:(state,action)=>{
              console.log("logout slice action")
            state.user= null;
            state.isLoggedin= false;
            state.isError=null;
        },
        setError : (state,action)=>{
              console.log(action)
            state.isError = action.payload;
        }
    }
})

export const {addUser,removeUser,setError} = userSlice.actions

 export default userSlice.reducer

