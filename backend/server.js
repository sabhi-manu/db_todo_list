require('dotenv').config()
const app = require("./src/app")
const connectDB = require('./src/db/db')

async function main(){
    try {
      await  connectDB()
      const PORT = process.env.PORT || 5000;
       app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
        
    } catch (error) {
        console.log("server not connect .")
    }
}

main()