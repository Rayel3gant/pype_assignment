const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Favourites:[
        {
           type:String 
        }
    ],
    Token:{
        type:String
    }
})

module.exports=mongoose.model("User",userSchema)