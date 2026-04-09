const express=require("express");
const registerUser=require("../controllers/user.controller")
const router=express.Router()

router.post("/register",registerUser)
// router.get("/login",loginUser)
// router.get("logout",logoutUser)

module.exports=router;