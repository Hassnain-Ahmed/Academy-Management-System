import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { authService } from "../Service/authService"

const Login = (props) => {

    const navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({ username: "", password: "" })
    const handleFormInputs = (e) => {
        const { name, value } = e.target
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }


    const handleFormLogin = async (e) => {
        e.preventDefault()
        const response = await authService.login(formLogin);
        if (response?.data?.accessToken) {
            authService.setToken(response?.data?.accessToken);
            console.log(response.data.userRole)

            if (response?.data?.userRole == 'user') {
                navigate('/user-dashboard');

            } else if (response?.data?.userRole == 'admin') {
                navigate('/admin-dashboard');

            }
        }
    }

    return (
        <div className="bg-neutral-200 p-10 m-2 rounded">
            <div className="mb-4 border-b-2 border-gray-300">
                <h1 className="text-xl">Login</h1>
                <p className="text-gray-600">Enter your credentials to login.</p>
            </div>
            <form autoComplete="off">
                <div className="flex flex-col gap-y-4 w-full">
                    <div>
                        <label className=" font-bold uppercase text-gray-700" htmlFor="Username">Username</label>
                        <input required type="text" id="Username" name="username" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.username} />
                    </div>
                    <div>
                        <label className=" font-bold uppercase text-gray-700" htmlFor="Password">Password</label>
                        <input required type="password" id="Password" name="password" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.password} />
                    </div>
                    <button onClick={handleFormLogin} className="bg-emerald-500 p-2 rounded-md">Login</button>
                </div>
            </form>
            <div className="mt-4">
                <p>Don't have an account <b className="cursor-pointer" onClick={props.toggle}>Signup</b></p>
            </div>
        </div>
    )
}

export default Login