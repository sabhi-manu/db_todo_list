const express = require("express")
const todoRoute = require("../src/routers/todo.route")
const userRoute = require("../src/routers/user.route")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://db-todo-list.netlify.app"
  ],
      credentials: true,
       methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/api/todo",todoRoute)
app.use("/api/user",userRoute)

module.exports = app

