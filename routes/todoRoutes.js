const express=require("express")
const { addTask, getTask, redis_post, searchTask, deletTask, updateTask } = require("../controller/todo.controller")
const { authenticate } = require("../middleware/authenticate")
const todoRouter=express.Router()

// const {TodoModal}=require("../modals/todoModal")


todoRouter.get("/todo",(req,res)=>{
    res.send("Hello from Todo App")
})


todoRouter.post("/add",authenticate,addTask)
todoRouter.get("/allTodo",getTask)
todoRouter.get("/search",searchTask)
todoRouter.delete("/remove/:id",deletTask)
todoRouter.patch("/edit/:id",updateTask)
// todoRouter.get("/search",searchTaskbyDesc)
module.exports={todoRouter}

/* exports.getTasks = async (req, res) => {
    try {
      req.redisClient.get('tasks', async (error, cachedTasks) => {
        if (error) {
          console.error('Error fetching tasks from Redis:', error);
          return res.status(500).json({ error: 'An error occurred' });
        }
  
        if (cachedTasks) {
          const tasks = JSON.parse(cachedTasks);
          res.json(tasks);
        } else {
          const tasks = await Task.find();
          req.redisClient.setex('tasks', 3600, JSON.stringify(tasks));
          res.json(tasks);
        }
      });
    } catch (error) {
      console.error('Error fetching tasks from MongoDB:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
exports.addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    req.redisClient.del('tasks');
    res.sendStatus(201);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndRemove(req.params.id);
    req.redisClient.del('tasks');
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

  */