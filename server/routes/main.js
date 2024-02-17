const express=require("express")
const Signup = require("../controllers/Signup")
const Login = require("../controllers/Login")
const Router=express.Router()
const Authentication =require("../middlewares/Authentication")
const DeletFromFavourites = require("../controllers/DeleteFromFavourites")
const GetAllFavourites = require("../controllers/GetAllFavourites")
const AddToFavourites = require("../controllers/AddToFavourites")


Router.post("/signup",Signup)
Router.post("/login",Login)

Router.post("/addToFavourites",Authentication,AddToFavourites)
Router.post("/deleteFromFavourites",Authentication,DeletFromFavourites)
Router.post("/getAllFavourites",Authentication,GetAllFavourites)


module.exports=Router