import axios from "axios"

 export const axiosInstance = axios.create({
    baseURL:"https://todo-backend-p777.onrender.com/api",
     withCredentials: true
})

