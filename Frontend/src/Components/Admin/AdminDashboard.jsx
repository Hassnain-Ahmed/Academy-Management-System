import { FaPencil, FaTrashCan } from "react-icons/fa6"
import AdminNavbar from "./AdminNavbar"
import { useEffect, useState } from "react"
import { authService } from "../../Service/authService"
import { Outlet, Route, Routes } from "react-router-dom"
import AdminDashboardStat from "./AdminDashboardStats"
import AdminDashboardTable from "./AdminDashboardTable"
import AdminStudents from "./AdminStudents"
import AdminGradingSystem from "./AdminGradingSystem"
import AdminClasses from "./AdminClasses"
import AdminLeaveApproval from "./AdminLeaveApproval"
import AdminReports from "./AdminReports"


const AdminLayout = () => {
    return (
        <>
            <AdminNavbar logout={authService.logOut} />
            <Outlet />
        </>
    )
}

const AdminDashboard = () => {

    const [credentials, setCredentials] = useState({ username: "", role: "" })

    useEffect(() => {
        const role = authService.getUserRole()
        const username = authService.getUserName()
        setCredentials(prevCred => ({
            ...prevCred,
            role,
            username
        }))
    }, [])

    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route path="/" element={<><AdminDashboardStat /> <AdminDashboardTable /></>} />
                <Route path="/students" element={<AdminStudents />} />
                <Route path="/students/report" element={<AdminReports />} />
                <Route path="/grading" element={<AdminGradingSystem />} />
                <Route path="/classes" element={<AdminClasses />} />
                <Route path="/leave_approval" element={<AdminLeaveApproval />} />
            </Route>



        </Routes>
    )
}

export default AdminDashboard