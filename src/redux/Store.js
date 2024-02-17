import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./main";


const store=configureStore({
    reducer:rootReducer
})

export default store