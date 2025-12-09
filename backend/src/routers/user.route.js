const express = require("express")
const { loginController,registerController, logoutController, getCurrentUser } = require("../controllers/user.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const route = express.Router()




route.get("/me",authMiddleware,getCurrentUser)

route.post("/register",registerController)
route.post("/login",loginController)
route.post("/logout",logoutController)

module.exports = route
