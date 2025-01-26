import { FaArrowRightFromBracket } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"

const AdminNavbar = ({ logout }) => {
    const navigate = useNavigate()

    // console.log(logout);
    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <div className="bg-gray-200 p-5 flex justify-between items-center relative font-sans">
            <div className="text-4xl font-bold relative">
                <span>A</span>
                <span>M</span>
                <span>S</span>
            </div>

            <ul className="flex justify-center gap-5 text-neutral-600 font-semibold">
                <li><Link to="/admin-dashboard">Home</Link></li>
                <li><Link to="students" >Students</Link></li>
                <li><Link to="grading">Grading</Link></li>
                <li><Link to="classes">Classes</Link></li>
                <li>
                    <Link to="leave_approval" className="relative">
                        Leave Approval
                    </Link>
                </li>
            </ul>

            <a href="/" onClick={handleLogout} className=" right-0 mx-4 flex gap-2 items-center cursor-pointer">
                <FaArrowRightFromBracket />
                <span>
                    Logout
                </span>
            </a>
        </div>
    )
}

export default AdminNavbar