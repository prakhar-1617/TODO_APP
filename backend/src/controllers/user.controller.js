const User=require("../models/user.model")
const registerUser=async (req,res)=>{
    try{
        const {username,email,password,phone}=req.body;
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        const user=await User.create({
            username,
            email,
            password,
            phone,
        });
        res.status(201).json({
            message:"User registered successfully",
            data:user,
        })

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({"error":error.message})
    }
}
module.exports=registerUser;

