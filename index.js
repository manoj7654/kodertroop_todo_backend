const express=require("express");
const app=express();

const cors=require("cors")

// importing connection 
const {connection}=require("./config/db");

// importing dotenv for accessing .env file
require("dotenv").config();

// importing todoRouter 
const {todoRouter}=require("./routes/todoRoutes")
const { userRouter }=require("./routes/userRoute")

const {client}=require("./config/redis")

// middleware
app.use(cors())
app.use(express.json())


app.get("/",async(req,res)=>{
    // const response=await client.set("name","manoj")
    const name=await client.get("name")
    res.json({"message":"Basic Endpoint of todo api",name})
})


app.use("/todos",todoRouter)
app.use("/users",userRouter)



// Server is running on specific port no 
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("Getting Error while getting connection to DB")
    }
    console.log(`Server is running on port no ${process.env.port}`)
})
