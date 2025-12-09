const express = require("express")
const { addTodoController, deleteTodoController, allTodoController, updateTodoController, isDoneTodoController } = require("../controllers/todo.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const route = express.Router()

route.get("/alltodo",authMiddleware,allTodoController)
route.post("/create" ,authMiddleware,addTodoController)
route.post("/delete" ,authMiddleware,deleteTodoController)
route.patch("/update" ,authMiddleware,updateTodoController)
route.patch("/toggle",authMiddleware,isDoneTodoController)

module.exports = route