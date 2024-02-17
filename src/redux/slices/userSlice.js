import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user :localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null, 
}

const userSlice= createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser(state,val){
            state.user=val.payload
        },
        setToken(state,val){
            state.token=val.payload
        }
    }
})


export const { setUser ,setToken } =userSlice.actions;
export default userSlice.reducer;