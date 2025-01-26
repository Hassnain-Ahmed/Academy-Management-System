import { Navigate } from "react-router-dom"
import { authService } from "../Service/authService"

export const PrivateRoute = ({children}) => {
    if(authService.isLoggedIn()){
        return children
    }
    else{
        window.location.href = "/login"
    }
}
