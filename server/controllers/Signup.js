const User=require("../models/User")
const bcrypt=require("bcrypt")
const Signup=async(req,res)=>{
   try{
    const {Name , Email , Password }=req.body;
    const encryptionRounds=10;

    if(!Name || !Email || !Password){
        return res.status(403).json({
            success:false,
            message:"data missing for signup"
        })
    }

    const userData=await User.findOne(
        {Email:Email}
    )

    if(userData){
        return res.status(400).json({
            success:false,
            message:"User already exists",
            userData
        })
    }

    const hashedPassword=await bcrypt.hash(Password,encryptionRounds)

    const newUserData=await User.create({
        Name:Name,
        Email:Email,
        Password:hashedPassword
    })

    return res.status(200).json({
        success:true,
        message:"User sign up successful",
        newUserData
    })
   } catch(error){
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"User Sign up failed"
    })
   }



}

module.exports=Signup