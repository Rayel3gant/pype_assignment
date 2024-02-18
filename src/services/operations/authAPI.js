import { toast } from "react-toastify"
import { setToken, setUser } from "../../redux/slices/userSlice"
import { apiConnector } from "../apiConnector"
import { authEndpoints } from "../apis"
const {
    SIGNUP_API,
    LOGIN_API
} =authEndpoints

export function signup(username,email,password ,navigate){
    return async()=>{
        try{
            const response =await apiConnector(
                "POST",
                SIGNUP_API,
                {
                    Name:username,
                    Email:email,
                    Password:password
                }
            )

            console.log("SIGNUP API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            console.log("sign up successful")
            toast.success("Sign Up Successful")

            navigate("/login")


        } catch(error){
            console.log("SIGNUP API ERROR............", error)
            toast.error("Sign Up error")
            navigate("/signup")
        }
    }
}


export function login(email , password , navigate){
    return async(dispatch)=>{
        try{
            const response =await apiConnector(
                "POST",
                LOGIN_API,
                {
                    Email:email,
                    Password:password
                }
            )

            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            dispatch(setToken(response.data.Token))
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", JSON.stringify(response.data.Token))
            localStorage.setItem("user", JSON.stringify(response.data.user))

            console.log("log in successful")
            toast.success("Log in successful")
            toast.error("Log in error")

            navigate("/search")

        } catch(error){
            console.log("LOGIN API ERROR............", error)
        }
    }
}


export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      console.log("user logged out")
      toast.warning("User Logged out")
      navigate("/")
    }
  }