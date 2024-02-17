const BASE_URL =process.env.REACT_APP_BASE_URL


export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/signup",
    LOGIN_API: BASE_URL + "/login",
 
}


export const favouritesEndpoints={
    ADDTOFAVOURITES_API :  BASE_URL + "/addToFavourites",
    DELETEFROMFAVOURITES_API:  BASE_URL+"/deleteFromFavourites",
    GETALLFAVOURITES_API:  BASE_URL+ "/getAllFavourites"
}