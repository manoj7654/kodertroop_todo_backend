const express=require("express")
const { addTask, getTask, redis_post, searchTask, deletTask, updateTask } = require("../controller/todo.controller")
const { authenticate } = require("../middleware/authenticate")
const todoRouter=express.Router()

// const {TodoModal}=require("../modals/todoModal")


todoRouter.get("/todo",(req,res)=>{
    res.send("Hello from Todo App")
})

// for add todo
todoRouter.post("/add",authenticate,addTask)

// for getting all todo
todoRouter.get("/allTodo",getTask)

// for searching todo
todoRouter.get("/search",searchTask)

// delete todo
todoRouter.delete("/remove/:id",authenticate,deletTask)

// update todo
todoRouter.patch("/edit/:id",authenticate,updateTask)

module.exports={todoRouter}

