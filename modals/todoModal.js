const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    userId:String,
    status:Boolean
})

const TodoModal=mongoose.model("todos",todoSchema);

module.exports={TodoModal}