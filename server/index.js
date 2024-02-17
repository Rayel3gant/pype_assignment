const express=require("express")
const app=express();
require("dotenv").config()
const dbConnect=require("./config/dbConnect")
const routes=require("./routes/main")
const cookieParser=require("cookie-parser")
const cors=require("cors");
const Port=process.env.BACKEND_PORT || 3002;

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use("/api/v1",routes)


dbConnect();


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"server actication successful"
    }) 
})


app.listen(Port,()=>{
    console.log("server activated on port ",Port)
})