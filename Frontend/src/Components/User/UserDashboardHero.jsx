import { FaCheck, FaXmark } from "react-icons/fa6"
import { useState } from "react"


const UserDashboardHero = () => {
    const [toggleRequestLeave, setToggleRequestLeave] = useState(false)
    const handleRequestLeave = () => {
        setToggleRequestLeave(prev => !prev)
    }

    const [requestLeaveInput, setRequestLeaveInput] = useState({ numberOfLeave: 1 })
    const handleRequestLeaveInput = (e) => {
        const { name, value } = e.target
        setRequestLeaveInput({
            ...requestLeaveInput,
            [name]: value
        })
    }
    const numberOfLeaveSubmit = () => {
        console.log("Submited")
        handleRequestLeave()
    }

    return (
        <>
            <div className="p-5">
                <div className="flex gap-5 justify-evenly">

                    <div className="relative w-full h-[150px] flex items-center justify-center bg-emerald-300 rounded-md">
                        <h1 className="text-5xl font-bold">15</h1>
                        <span className="absolute top-1 left-2">Total Attendences</span>
                        <div className="absolute bottom-1 right-1">
                            <button className="bg-emerald-700 text-white px-5 py-2 hover:shadow-lg hover:scale-y-105 rounded-lg transition-all">View All</button>
                        </div>
                    </div>
                    <div className="relative w-full h-[150px] flex items-center justify-center bg-rose-300 rounded-md">
                        <h1 className="text-5xl font-bold">2</h1>
                        <span className="absolute top-1 left-2">Total Leaves</span>
                        <div className="absolute bottom-1 right-1">
                            <button className="bg-pink-600 text-white px-5 py-2 hover:shadow-lg hover:scale-y-105 rounded-lg mx-2">View All</button>
                            <button className="bg-rose-600 text-white px-5 py-2 hover:shadow-lg hover:scale-y-105 rounded-lg transition-all" onClick={handleRequestLeave}>Request Leave</button>
                        </div>
                    </div>

                </div>

                <div className="my-4 p-2 shadow border-2 rounded-lg">
                    <h1 className="text-lg font-bold text-neutral-600 my-2">Today's Attendance</h1>
                    <table className="w-full my-2">
                        <thead className="bg-gray-200 ">
                            <tr>
                                <th className="p-2">No.</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Class</th>
                                <th className="p-2">Department</th>
                                <th className="p-2">Attendances</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className=" border-b-2 bg-red-300">
                                <td className="p-2">U-1</td>
                                <td className="p-2">Hassnain Ahmed</td>
                                <td className="p-2">dev.hassnain77@gmail.com</td>
                                <td className="p-2">A</td>
                                <td className="p-2">CS</td>
                                <td className="p-2"> <div className="flex justify-center cursor-pointer"><FaCheck className="text-green-100 text-xl" /></div> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            {
                toggleRequestLeave ?
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-zinc-300 bg-opacity-40">
                        <div className="relative noArrow">
                            <span className="absolute right-1 top-1"><FaXmark onClick={handleRequestLeave} /></span>
                            <input
                                type="number"
                                className="p-5 rounded-xl w-[150px] h-[150px] text-5xl text-center"
                                name="numberOfLeave"
                                value={requestLeaveInput.numberOfLeave}
                                onChange={handleRequestLeaveInput} />
                        </div>
                        <button className="mt-4 bg-emerald-600 text-white px-8 py-2 rounded-lg" onClick={numberOfLeaveSubmit}>Sumbit</button>
                    </div>
                    : <div></div>
            }
        </>
    )
}

export default UserDashboardHero