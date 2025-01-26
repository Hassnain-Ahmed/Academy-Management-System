import { FaDice, FaPen, FaXmark } from "react-icons/fa6"
import AdminNavbar from "./AdminNavbar"
import { useState, useEffect } from "react"

const AdminClasses = () => {
    const [toggleCreateClass, setToggleCreateClass] = useState(false)
    const handleCreateClass = (e) => {
        const ariaValueText = e.currentTarget.getAttribute('aria-valuetext')
        const [editEnrollId, editClassname, editDepartment, editInstructor] = ariaValueText.split('|')
        e.currentTarget.getAttribute("aria-valuetext") === "new"
            ? setCreateClass(
                {
                    enrollId: "",
                    className: "",
                    department: "",
                    instructor: ""
                })
            : setCreateClass(
                {
                    enrollId: editEnrollId,
                    className: editClassname,
                    department: editDepartment,
                    instructor: editInstructor
                }
            )
        setToggleCreateClass(prev => !prev)

    }

    const [createClass, setCreateClass] = useState({ enrollId: 1, className: "", department: "", instructor: "" })
    const handleCreateClassInputs = (e) => {
        const { name, value } = e.target
        setCreateClass({
            ...createClass,
            [name]: value
        })
    }

    // const editClass = (e) => {
    //     const ariaValueText = e.currentTarget.getAttribute('aria-valuetext')
    //     const [editEnrollId, editClassname, editDepartment, editInstructor] = ariaValueText.split('|')

    //     setCreateClass(
    //         {
    //             enrollId: editEnrollId,
    //             className: editClassname,
    //             department: editDepartment,
    //             instructor: editInstructor
    //         }
    //     )
    //     handleCreateClass()
    // }

    const numberOfLeaveSubmit = () => {
        console.log("Submited")
        handleCreateClass()
    }

    useEffect(() => {
        console.log("hitEff")
    }, [])


    return (
        <>
            <div className="p-5">
                <div className="flex justify-between border-b-2 p-2">
                    <h1 className="text-xl font-bold text-neutral-500">Classes</h1>
                    <p className="text-sky-400 cursor-pointer" aria-valuetext="new" onClick={handleCreateClass}>Create a new Class</p>
                </div>
                <ul className="flex gap-4 my-5 w-full">
                    <li>
                        <div className="bg-gray-500 text-gray-100 p-5 rounded-md cursor-default">
                            <p className="flex justify-between items-center border-b-2 my-4"><span className="text-2xl">01.</span> <span className="cursor-pointer" aria-valuetext="010921|Section A|BSCS-7|Sir MB" onClick={handleCreateClass}><FaPen /> </span></p>
                            <h1 className="text-md">Class: <span className="font-bold">Section A</span></h1>
                            <h2 className="text-md">Depeartment: <span className="font-bold">BSCS-7</span></h2>
                            <h2 className="text-md">Instructor: <span className="font-bold">Sir MB</span></h2>
                            <h2 className="text-md">Students: <span className="font-bold">15</span></h2>
                            <h2 className="text-md">Created: <span className="font-bold">6-7-2024</span></h2>
                            <a href="#" className="block text-center mt-4 bg-emerald-500 w-full text-white p-2 rounded">View Class</a>
                        </div>
                    </li>

                    <li>
                        <div className="bg-gray-500 text-gray-100 p-5 rounded-md cursor-default">
                            <p className="flex justify-between items-center border-b-2 my-4"><span className="text-2xl">01.</span> <span className="cursor-pointer" aria-valuetext="010921|Section A|BSCS-7|Sir MB" onClick={handleCreateClass}><FaPen /> </span></p>
                            <h1 className="text-md">Class: <span className="font-bold">Section A</span></h1>
                            <h2 className="text-md">Depeartment: <span className="font-bold">BSCS-7</span></h2>
                            <h2 className="text-md">Instructor: <span className="font-bold">Sir MB</span></h2>
                            <h2 className="text-md">Students: <span className="font-bold">15</span></h2>
                            <h2 className="text-md">Created: <span className="font-bold">6-7-2024</span></h2>
                            <a href="#" className="block text-center mt-4 bg-emerald-500 w-full text-white p-2 rounded">View Class</a>
                        </div>
                    </li>
                </ul>
            </div>
            {
                toggleCreateClass ?
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-zinc-300 bg-opacity-40">
                        <div className="relative w-[30%]">
                            <span className="absolute right-0 top-0"><FaXmark onClick={() => { setToggleCreateClass(false) }} /></span>
                            <form action="" className="flex flex-col p-4 gap-y-3">
                                <div className="relative ">
                                    <input type="text" placeholder="Enroll Id" className="p-2 rounded w-full" name="enrollId" value={createClass.enrollId} onChange={handleCreateClassInputs} />
                                    <FaDice className="absolute right-2 top-2 text-lg text-gray-500" />
                                </div>
                                <input type="text" placeholder="Class Name" className="p-2 rounded" name="className" value={createClass.className} onChange={handleCreateClassInputs} />
                                <input type="text" placeholder="Department" className="p-2 rounded" name="department" value={createClass.department} onChange={handleCreateClassInputs} />
                                <input type="text" placeholder="Instructor" className="p-2 rounded" name="instructor" value={createClass.instructor} onChange={handleCreateClassInputs} />
                                <button className="mt-4 bg-emerald-600 text-white px-8 py-2 rounded-lg" onClick={numberOfLeaveSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                    : <div></div>
            }
        </>
    )
}

export default AdminClasses