import axios from "axios"

 export const axiosInstance = axios.create({
    baseURL:"https://db-todo-list-et0j.onrender.com",
     withCredentials: true
})

