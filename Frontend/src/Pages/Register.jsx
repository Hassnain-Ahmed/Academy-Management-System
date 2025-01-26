import { useState } from "react"
// import axios from "axios"

const Register = (props) => {
    const [formLogin, setFormLogin] = useState({ name: "", phone: "", email: "", username: "", password: "" })
    const [errors, setErrors] = useState({})

    const handleFormInputs = (e) => {
        const { name, value } = e.target
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }

    const handleFormRegister = (e) => {
        e.preventDefault()
        const { name, phone, email, username, password } = formLogin

        let tempErrors = {}
        if (!name) tempErrors.name = "Name is required"
        if (!phone) tempErrors.phone = "Phone is required"
        if (!email) tempErrors.email = "Email is required"
        if (!username) tempErrors.username = "Username is required"
        if (!password) tempErrors.password = "Password is required"

        setErrors(tempErrors)
        console.log(formLogin)

        if (Object.keys(tempErrors).length === 0) {
            axios.post("http://localhost:3000/api/auth/register", formLogin)
                .then(response => {
                    console.log("User registered successfully", response.data)
                    setFormLogin({ name: "", phone: "", email: "", username: "", password: "" })
                    props.toggle()
                })
                .catch(error => {
                    console.error("Error registering user", error)
                })
        }
    }


    return (
        <div className="bg-neutral-200 p-10 m-2 rounded">
            <div className="mb-4 border-b-2 border-gray-300">
                <h1 className="text-xl">Register</h1>
                <p className="text-gray-600">Enter your credentials to Signup.</p>
            </div>
            <form>
                <div className="flex flex-col gap-y-4 w-full">
                    <div>
                        <label className="font-bold uppercase text-gray-700" htmlFor="Name">Name</label>
                        <input
                            required
                            type="text"
                            id="Name"
                            name="name"
                            className={`p-2 rounded w-full ${errors.name ? 'border-red-500' : ''}`}
                            onChange={handleFormInputs}
                            value={formLogin.name}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="font-bold uppercase text-gray-700" htmlFor="Phone">Phone</label>
                        <input
                            required
                            type="tel"
                            id="Phone"
                            name="phone"
                            className={`p-2 rounded w-full ${errors.phone ? 'border-red-500' : ''}`}
                            onChange={handleFormInputs}
                            value={formLogin.phone}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    <div>
                        <label className="font-bold uppercase text-gray-700" htmlFor="Username">Username</label>
                        <input
                            required
                            type="text"
                            id="Username"
                            name="username"
                            className={`p-2 rounded w-full ${errors.username ? 'border-red-500' : ''}`}
                            onChange={handleFormInputs}
                            value={formLogin.username}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div>
                        <label className="font-bold uppercase text-gray-700" htmlFor="Email">Email</label>
                        <input
                            required
                            type="email"
                            id="Email"
                            name="email"
                            className={`p-2 rounded w-full ${errors.email ? 'border-red-500' : ''}`}
                            onChange={handleFormInputs}
                            value={formLogin.email}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="font-bold uppercase text-gray-700" htmlFor="Password">Password</label>
                        <input
                            required
                            type="text"
                            id="Password"
                            name="password"
                            className={`p-2 rounded w-full ${errors.password ? 'border-red-500' : ''}`}
                            onChange={handleFormInputs}
                            value={formLogin.password}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <button onClick={handleFormRegister} className="bg-emerald-500 p-2 rounded-md">Register</button>
                </div>
            </form>
            <div className="mt-4">
                <p>Already have an account <b className="cursor-pointer" onClick={props.toggle}>Login</b></p>
            </div>
        </div>
    )
}

export default Register
