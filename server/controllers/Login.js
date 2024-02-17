const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const Login=async(req,res)=>{
    try{
        const { Email , Password }=req.body;

        if( !Email || !Password){
            return res.status(403).json({
                success:false,
                message:"data missing for login"
            })
        }

        const userData=await User.findOne(
            {Email:Email}
        )

        if(!userData){
            return res.status(401).json({
                success:false,
                message:"User Not Found"
            })
        }

        if(await bcrypt.compare(Password,userData.Password)){
            const payload={
                Email:userData.Email,
                id:userData._id
            }

            const Token= jwt.sign(payload,process.env.JWT_KEY,{
                expiresIn:"24h"
            })
            userData.Token=Token
            userData.Password=""

            const options={
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
            console.log("User Log in successful")
            res.cookie("Token",Token,options).status(200).json({
                success:true,
                message:"User Log in Successful",
                user:userData,
                Token
            })


        } else {
            console.log("log in failed due to wrong password")
            return res.status(401).json({
                success:false,
                message:"incorrect password"
            })
        }


    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"login failed"
        })
    }
}
module.exports=Login