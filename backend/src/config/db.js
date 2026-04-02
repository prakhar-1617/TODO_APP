const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connectDB=async(req,res)=>{
    try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDb Connected")
    }
    catch(error){
            console.error("Error connecting to MongoDB",error)
    }
}
module.exports=connectDB