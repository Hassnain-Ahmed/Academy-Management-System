import { FaUser, FaUserGraduate, FaEnvelope, FaPhone, FaSchool, FaBookOpen, FaBookOpenReader, FaChalkboard } from "react-icons/fa6"
import AdminNavbar from "./AdminNavbar"

const AdminReports = () => {
    return (
        <>
            <div className="p-5">
                <h1 className="my-2 uppercase">Student Report</h1>
                <div className="border-2 p-5 rounded-lg">

                    <div className="my-4">
                        <h1 className="text-2xl font-bold border-b-2 my-2">Personal</h1>
                        <h1 className="text-lg flex items-center gap-2 my-2"><FaUser className="text-gray-500" /> Name: Hassnain Ahmed </h1>
                        <h4 className="text-md flex items-center gap-2 my-2"><FaUserGraduate className="text-gray-500" /> Username: hassnain77</h4>
                        <h2 className="text-md flex items-center gap-2 my-2"><FaEnvelope className="text-gray-500" /> Email: dev.hassnain77@gmail.com</h2>
                        <h3 className="text-md flex items-center gap-2 my-2"><FaPhone className="text-gray-500" /> Phone: 03103582990</h3>
                    </div>

                    <div className="my-4">
                        <h1 className="text-2xl font-bold border-b-2 my-2">Education</h1>
                        <h1 className="text-lg flex items-center gap-2 my-2"><FaSchool className="text-gray-500" /> Department: Computer Science </h1>
                        <h4 className="text-md flex items-center gap-2 my-2"><FaBookOpenReader className="text-gray-500" /> Semester: 7th</h4>
                        <h2 className="text-md flex items-center gap-2 my-2"><FaChalkboard className="text-gray-500" /> Section: A</h2>

                        <div>
                            <h2 className="text-xl font-bold border-b-2 my-2">Classes</h2>
                            <table className="w-full tableDesign-1">
                                <thead className="">
                                    <tr className="text-left">
                                        <th>Class</th>
                                        <th>Instructor</th>
                                        <th>Grade</th>
                                        <th>Attendance</th>
                                        <th>Leave</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FYP</td>
                                        <td>Mr. Arslan</td>
                                        <td>-A</td>
                                        <td>22</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Ethical Hacking</td>
                                        <td>Mr. Shahzed</td>
                                        <td>-A</td>
                                        <td>20</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Artificial Intelligence</td>
                                        <td>Mr. Asim Riaz</td>
                                        <td>-A</td>
                                        <td>22</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Finite Autometa</td>
                                        <td>Ms. Sara</td>
                                        <td>-A</td>
                                        <td>22</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Parallel and Distribuitive Computing</td>
                                        <td>Ms. Tahira</td>
                                        <td>-A</td>
                                        <td>22</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div>
                        <button className="w-full p-2 bg-cyan-200 hover:bg-cyan-300 transition-colors rounded">Print Report</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminReports