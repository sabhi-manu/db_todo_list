import axios from "axios"

 export const axiosInstance = axios.create({
    baseURL:"https://db-todo-list-et0j.onrender.com/api",
    // baseURL:"http://localhost:3000/api",
     withCredentials: true
})

