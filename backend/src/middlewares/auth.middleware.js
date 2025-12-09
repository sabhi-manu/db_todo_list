const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

async function authMiddleware(req,res,next) {
   try {
    let {token}= req.cookies
    if(!token){
        return res.status(403).json({
            message:"Token not found, Unauthorize use"
        })
    }

    let decode =  jwt.verify(token,process.env.JWT_SECRET)

    if(!decode){
        return res.status(403).json({
            message:"Invalid token "
        })
    }

    // console.log("this is token",token)
    // console.log("decode value====>",decode)

let user = await userModel.findById(decode.id)
// console.log(user)

if(!user){
    return res.status(403).json({
        message:"unauthorize user"
    })
}

req.user = user
next()

   } catch (error) {
    console.log("auth middleware error===>",error.meessage)
     return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
   }
}

module.exports = authMiddleware