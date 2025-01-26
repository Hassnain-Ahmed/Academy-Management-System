import { useState } from "react"


const UserProfile = (props) => {
    const [formLogin, setFormLogin] = useState({ name: "", phone: "", email: "", username: "", password: "" })
    const handleFormInputs = (e) => {
        const { name, value } = e.target
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }


    return (
        <>
            <div className="p-5">
                <div className="bg-neutral-200 p-10 m-2 rounded">
                    <div className="mb-4 border-b-2 border-gray-300">
                        <h1 className="text-xl">Profile</h1>
                    </div>
                    <form >
                        <div className="flex flex-col gap-y-4 w-full">
                            <div>
                                <label className=" font-bold uppercase text-gray-700" htmlFor="Name">Name</label>
                                <input type="text" id="Name" name="name" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.name} />
                            </div>
                            <div>
                                <label className=" font-bold uppercase text-gray-700" htmlFor="Phone">Phone</label>
                                <input type="number" id="Phone" name="phone" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.phone} />
                            </div>
                            <div>
                                <label className=" font-bold uppercase text-gray-700" htmlFor="Username">Username</label>
                                <input type="text" id="Username" name="username" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.username} />
                            </div>
                            <div>
                                <label className=" font-bold uppercase text-gray-700" htmlFor="Email">Email</label>
                                <input type="email" id="Email" name="email" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.email} />
                            </div>
                            <div>
                                <label className=" font-bold uppercase text-gray-700" htmlFor="Password">Password</label>
                                <input type="password" id="Password" name="password" className="p-2 rounded w-full" onChange={handleFormInputs} value={formLogin.password} />
                            </div>
                            <button disabled className="bg-emerald-500 p-2 rounded-md disabled:bg-emerald-200 disabled:text-neutral-500">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default UserProfile