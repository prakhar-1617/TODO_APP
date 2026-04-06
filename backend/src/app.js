const express=require("express")
const app=express()
const todoRoutes=require("./routes/todo.routes")
const cookieParser=require("cookie-parser")
const session=require("express-session")

app.use(express.json())
app.use(cookieParser());

app.get("/set-cookie",(req,res)=>{
    res.cookie("name","user-1");
    res.send(("Cookie set"));
});
app.get("/get-cookie",(req,res)=>{
    res.json(res.cookies); 
})
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true,
}))
//   First go on postman and post login {usernam:data }--- then get  /profile
app.post("/login",(req,res)=>{
    const {username}=req.body;
    req.session.user=username;
    res.send("user loggedin")
})

app.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("user not logged in ")
    }
    res.send(`welcome ${req.session.user}`)
})
app.get("/logout",(req,res)=>{
    req.session.destroy()
    return res.send("Logged out")
})

app.use("/api/todos",todoRoutes)
module.exports=app;