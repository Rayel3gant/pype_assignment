const User=require("../models/User")
const GetAllFavourites=async(req,res)=>{
    try{
        const userID= req.user.id;
        
        if( !userID){
            return res.status(403).json({
                succcess:false,
                message:"Data missing"
                })
        }
        const favouritesData=await User.findById(userID)

        return res.status(200).json({
            successS:true,
            message:"Favourites data fetched  ",
            data:favouritesData.Favourites
        })

    } catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Could not fetch Favourites List"
        })
    }
}

module.exports=GetAllFavourites