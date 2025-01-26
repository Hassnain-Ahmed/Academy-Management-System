import axiosInstance from "../axios/axiosInstance";
import {jwtDecode} from "jwt-decode"

const setToken = (token) => {
    localStorage.setItem("accessToken",token)
}

const getToken = (token) => {
    token = localStorage.getItem("accessToken")
    return token ? token : null
}

const login = (userData) => {
    return axiosInstance.post("/login", userData)
}

const getUserName = () => {
    const token = getToken();
    if(token){
        const payload = jwtDecode(token)
        return payload.username
    }
    return null
}

const getUserRole = () => {
    const token = getToken();
    if(token){
        const payload = jwtDecode(token)
        return payload.user.role
    }
    return null
}

const isLoggedIn = () => {
    const token = getToken()
    if(token){
        const payload = jwtDecode(token)
        const isLogin = Date.now() < payload.exp * 1000
        return isLogin
    }
}

const logOut = ()=> {
    localStorage.clear();
 }

export const authService = {
    getToken,
    setToken,
    login,
    getUserName,
    getUserRole,
    isLoggedIn,
    logOut
}