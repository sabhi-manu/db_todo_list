const mongoose = require("mongoose")

async function connectDB (){
  try {
  await  mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
        console.log("data base connect successfully.")
    })
  } catch (error) {
    console.log("data base not connect ")
  }  
}

module.exports = connectDB