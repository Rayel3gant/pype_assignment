import { createSlice } from "@reduxjs/toolkit"

const initialState={
    weather : localStorage.getItem("weather") ? JSON.parse(localStorage.getItem("weather")) : null,
    forecast :localStorage.getItem("forecast") ? JSON.parse(localStorage.getItem("forecast")) : null,

}


const weatherSlice= createSlice({
    name:"weather",
    initialState:initialState,
    reducers:{
        setWeather(state,val){
            state.weather=val.payload
        },
        setForecast(state,val){
            state.forecast=val.payload
        }
    }
})


export const { setWeather , setForecast} =weatherSlice.actions
export  default weatherSlice.reducer