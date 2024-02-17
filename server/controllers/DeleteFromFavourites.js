const User=require("../models/User")

const DeletFromFavourites=async(req,res)=>{
    try{
        const userID= req.user.id;
        const { dataId } =req.body;
        if( !data || !userID){
            return res.stautus(403).json({
                succcess:false,
                message:"Data missing"
            })
        }

        await User.findByIdAndUpdate(
            {_id:userID},
            {
                $pull:{
                    Favourites:dataId
                }
            },
            {new:true}
        )

        return res.stautus(200).json({
            success:true,
            message:"Removed from favourites list successfully"
        })


    } catch(error){
        console.log(error)

        return res.stautus(500).json({
            success:false,
            message:"Could not remove from Favourites List"
        })
    }
}

module.exports=DeletFromFavourites