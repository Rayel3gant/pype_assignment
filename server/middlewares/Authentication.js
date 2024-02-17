require("dotenv").config()
const jwt=require("jsonwebtoken")

const Authentication=async(req,res,next)=>{
    console.log("authentication of user via token")
    try{
        const Token=req.body.Token || req.cookies.Token || req.header("Authentication").replace("Bearer ","")
        console.log("authenticating user",Token)
        if(!Token){
            return res.status(401).json({
                success:false,
                message:"token missing , can not authenticate user"
            })
        }

        try{
            const decodedData= jwt.verify(Token,process.env.JWT_KEY);
            console.log("decoded data:",decodedData);
            req.user=decodedData;   
        }
        catch(error){
            console.log(error);
            res.status(401).json({
                success:false,
                message:"invalid token"
            })
        }

        next();

    } catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"can't authenticate user"
        })
    }

}
module.exports=Authentication