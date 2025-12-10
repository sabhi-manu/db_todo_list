const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



async function getCurrentUser(req,res) {
    let user = await userModel.findById(req.user.id).populate("post")
    console.log("this is get user",user)

    if(!user){
     return res.status(403).json({
        message:"unauthorized user"
     })
    }

    res.status(200).json({
        message:"user login.",
        user
    })
    
}


 async function registerController(req,res) {
    let {userName,email,password} = req.body

    if(!userName || !email || !password){
        return res.status(400).json({
            message:"data not provided correctly"
        })
    }
    
    let isUserExist = await userModel.findOne({
        $or:[{email},{userName}]
    })

     if(isUserExist){
        return res.status(409).json({
            message:"user already exist."
        })
    }
    let hash = await bcrypt.hash(password,10)

    let user = await userModel.create({
        userName,
        email,
        password:hash
    })
    if(!user){
        return res.status(500).json({
            message:"user not register,  server error. "
        })
    }
     
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token ,{
  httpOnly: true,
  secure: true,
  sameSite: "none",
    path: "/"
})

    res.status(201).json({
        message:"user register successfully",
        user
    })
 }


 async function loginController(req,res) {
    const {email,password} = req.body
    if( !email || !password){
        return res.status(400).json({
            message:"data not provided correctly"
        })
    }

      let user = await userModel.findOne({
        $or:[{email}]
    }).populate("post")

     if(!user){
        return res.status(401).json({
            message:"user not exist."
        })
    }
    let passwordCheck =  bcrypt.compare(password,user.password)
     if(!passwordCheck){
        return res.status(401).json({
            message:"user not exist."
        })
    }
     const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
    path: "/"
})
console.log("user logout successfully.==>")
res.status(200).json({
    message:"user login successfully",
    user
})
 }

 async function logoutController (req,res){
    console.log("logout controller ==>")
      let token = req.cookies?.token; 

    if (!token) {
      return res.status(404).json({
        message: "Token not found, Unauthorize user",
      });
    }


 res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  path: "/",  
});

    return res.status(200).json({
      message: "user logged out",
    });
 }



 module.exports= {loginController,registerController,logoutController,getCurrentUser}