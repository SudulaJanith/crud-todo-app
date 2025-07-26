const express = require("express");

const Todo=require("./models/todo");

const router= express.Router();

router.get("/todos",async(req,res)=>{
    const todos = await Todo.find();

    res.status(200).json(todos);
});

router.post("/todos",async(req,res)=>{
    const  task  =req.body.task;
    const newTodo= new Todo({task:task});
    
    await newTodo.save();
    res.status(200).json(newTodo)
   
});

router.put("/todos/:id",(req,res)=>{
    res.status(200).json({msg:"Put todos /api/todos" })
});

router.delete("/todos/:id",(req,res)=>{
    res.status(200).json({msg:"Delete todos /api/todos" })
});

module.exports= router;