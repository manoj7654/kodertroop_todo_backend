const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    versionKey:false
})

const UserModal=mongoose.model("users",userSchema);


module.exports={UserModal}