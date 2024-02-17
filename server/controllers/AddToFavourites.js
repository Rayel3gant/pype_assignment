const User=require("../models/User")

const AddToFavourites=async(req,res)=>{
    try{
        const { data } =req.body;
        const userID= req.user.id;

        console.log("user id",userID)
        console.log("data",data)

        if( !data || !userID){
            return res.status(403).json({
                succcess:false,
                message:"Data missing"
            })
        }

        await User.findByIdAndUpdate(
            {_id:userID},
            {
                $push:{
                    Favourites:data
                }
            },
            {new:true}
        )

        return res.status(200).json({
            success:true,
            message:"Added to favourites list successfully"
        })

    } catch(error){
        console.log(error)

        return res.status(500).json({
            success:false,
            message:"Could not add to Favourites List"
        })
    }
}

module.exports=AddToFavourites