const express = require("express")
const connectDb = require("./config/db")
const Todo = require("./models/todo")
const app = express()

connectDb()
app.use(express.json())

// get all todos
app.get("/",async(req,res)=>{
     try{
        const getAllTodos = await Todo.find({
        })

        return res.status(201).json({
            success: true,
            todos: getAllTodos,
            msg:"todo fetched successfully"
        })               
    }catch(error){
        console.log(error,"error while fetching todo")
           return res.status(500).json({
            success: false,
            msg:"something went wrong"
        })              
    }
})

// create todo
app.post("/",async(req,res)=>{
    try{
        const createTodo = await Todo.create({
            title: req.body.title,
            description: req.body.description
        })

        return res.status(201).json({
            success: true,
            msg:"todo created successfully"
        })               
    }catch(error){
        console.log(error,"error while creating todo")
           return res.status(500).json({
            success: false,
            msg:"something went wrong"
        })              
    }
})

// update todo
app.patch("/:id",async(req,res)=>{
     try{
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            description: req.body.description
        },{new:true})

        return res.status(201).json({
            success: true,
            msg:"todo updated successfully"
        })               
    }catch(error){
        console.log(error,"error while updating todo")
           return res.status(500).json({
            success: false,
            msg:"something went wrong"
        })              
    }
})


// delete todo
app.delete("/:id",async(req,res)=>{
    try{
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)

        return res.status(201).json({
            success: true,
            msg:"todo deleted successfully"
        })               
    }catch(error){
        console.log(error,"error while deleting todo")
           return res.status(500).json({
            success: false,
            msg:"something went wrong"
        })              
    } 
})

app.listen(3000,()=>{
    console.log("server is booming on port 3000")
})