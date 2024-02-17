import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import weatherReducer from "./slices/weatherSlice" 


const rootReducer= combineReducers({
    user:userReducer,
    weather:weatherReducer
})


export default rootReducer