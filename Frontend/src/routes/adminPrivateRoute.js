import { Navigate } from "react-router-dom"
import { authService } from "../Service/authService"

export const AdminPrivateRoute = ({children}) => {
    if(authService.getUserRole() === 'admin'){
        return children
    }
    else{
        window.location.href = "/login"
    }
}