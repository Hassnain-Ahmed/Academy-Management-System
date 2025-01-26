import { FaPencil, FaTrashCan } from "react-icons/fa6"

const AdminDashboardTable = () => {
    return (
        <div className="p-5">
            <div className="p-5 border-2 rounded-md shadow-md flex flex-col justify-center ">
                <div className="flex justify-between border-b-2 my-4">
                    <h1 className="text-lg font-bold  text-neutral-600">Recent Records</h1>
                    <a href="#">View All Records</a>
                </div>
                <table className="w-full">
                    <thead className="bg-gray-200 ">
                        <tr>
                            <th className="p-2">No.</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Grade</th>
                            <th className="p-2">Class</th>
                            <th className="p-2">Instructor</th>
                            <th className="p-2">Department</th>
                            <th className="p-2">Attendances</th>
                            <th className="p-2">Leaves</th>
                            <th className="p-2">Edit</th>
                            <th className="p-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className=" border-b-2">
                            <td className="p-2">U-1</td>
                            <td className="p-2">Hassnain Ahmed</td>
                            <td className="p-2">dev.hassnain77@gmail.com</td>
                            <td className="p-2">B-</td>
                            <td className="p-2">Section A</td>
                            <td className="p-2">Sir MB</td>
                            <td className="p-2">CS</td>
                            <td className="p-2">22</td>
                            <td className="p-2">1</td>
                            <td className="p-2"> <div className="flex justify-center cursor-pointer"><FaPencil /></div> </td>
                            <td className="p-2"> <div className="flex justify-center cursor-pointer"><FaTrashCan /></div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AdminDashboardTable