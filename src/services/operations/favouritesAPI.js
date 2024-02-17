import { apiConnector } from "../apiConnector"
import { favouritesEndpoints} from "../apis"

const {
    ADDTOFAVOURITES_API,
    DELETEFROMFAVOURITES_API,
    GETALLFAVOURITES_API
}=favouritesEndpoints

export function addToFavourites(data , token ){
    console.log("data before calling",data)

    return async()=>{
        try{
            const response = await apiConnector(
                "POST",
                ADDTOFAVOURITES_API,
                {
                    data:data
                },
                {
                    Authentication : `Bearer ${token}`
                }
            )
            console.log("ADD TO FAVOURITES API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }


        } catch(error){
            console.log("ADDTOFAVOURITES API ERROR............", error)
        }
    }
}

export function deleteFromFavourites(dataId , token){
    console.log("data before calling",dataId)
    return async()=>{
        try{
            const response=await apiConnector(
                "POST",
                DELETEFROMFAVOURITES_API,
                dataId,
                {
                    Authentication : `Bearer ${token}`
                }
            )
            console.log("DELETE FAVOURITES API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
        } catch(error){
            console.log("DELETEFROMFAVOURITES API ERROR............", error)
        }
    }
}

export function getAllFavourites(token){
    console.log("calling backend")
    console.log(token)
    return async()=>{
        try{
            const response=await apiConnector(
                "POST",
                GETALLFAVOURITES_API,
                null,
                {
                    Authentication : `Bearer ${token}`
                }

            )

            console.log("GET ALL FAVOURITES API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            return response?.data?.data
        } catch(error){
            console.log("GETALLFAVOURITES API ERROR............", error)
        }

        return null
        
    }
}