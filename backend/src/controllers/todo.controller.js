const Todo=require("../models/todo.model")
const createTodo=async(req,res)=>{
    try{
        const todo=await Todo.create(req.body)
        res.status(200).json({data:todo})
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }
}

const getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find();
        res.status(200).json({data:todo})
        
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }
}
const updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const updateTodo=await Todo.findByIdAndUpdate(id,req.body);

        req.status(200).json({message:"todo updated",data:uodatedTodo})
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndUpdate(id);

        req.status(200).json({message:"deleted sucessfully"})
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports={createTodo,getTodos,updateTodo,deleteTodo};