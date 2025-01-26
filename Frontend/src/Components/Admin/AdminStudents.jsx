import { Link } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"

const AdminStudents = () => {
    return (
        <>
            <div className="p-5">
                <p className="text-md font-bold border-b-2 my-2">Student Records</p>

                <div className="my-4">

                    <ul className="flex gap-4">
                        <li className="border-2 p-4 rounded-md shadow-md hover:scale-105 transition-all">
                            <p>ID: 41231</p>
                            <h1 className="font-bold">Personal Info</h1>
                            <div className="ml-2">
                                <p>Hassnain Ahmed</p>
                                <p>dev.hassnain77@gmail.com</p>
                                <p>03103582990</p>
                            </div>
                            <h1 className="font-bold">Educational Info</h1>
                            <div className="ml-2">
                                <p>BSCS</p>
                                <p>Classes: 12</p>
                                <p>Attendance: 15</p>
                                <p>Leaves: 2</p>
                            </div>
                            <a href="#" className="block text-center mt-4 bg-amber-200 hover:bg-amber-300 transition-colors px-2 py-1 rounded">View Report</a>
                        </li>
                        <li className="border-2 p-4 rounded-md shadow-md hover:scale-105 transition-all">
                            <p>ID: 41231</p>
                            <h1 className="font-bold">Personal Info</h1>
                            <div className="ml-2">
                                <p>Hassnain Ahmed</p>
                                <p>dev.hassnain77@gmail.com</p>
                                <p>03103582990</p>
                            </div>
                            <h1 className="font-bold">Educational Info</h1>
                            <div className="ml-2">
                                <p>BSCS</p>
                                <p>Classes: 12</p>
                                <p>Attendance: 15</p>
                                <p>Leaves: 2</p>
                            </div>
                            <Link to="report" className="block text-center mt-4 bg-amber-200 hover:bg-amber-300 transition-colors px-2 py-1 rounded">View Report</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default AdminStudents