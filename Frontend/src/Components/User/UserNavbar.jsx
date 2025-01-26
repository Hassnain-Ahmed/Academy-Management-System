import { FaArrowRightFromBracket } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"

const UserNavbar = ({ logout }) => {

    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <div className="bg-gray-200 p-5 flex justify-between items-center relative font-sans">
            <div className="text-4xl font-bold relative">
                <span>A</span>
                <span>M</span>
                <span>S</span>
            </div>
            <ul className="flex justify-center gap-5 font-bold text-neutral-600 uppercase">
                <li><Link to="/user-dashboard">Home</Link></li>
                <li><Link to="view_classes">View Classes</Link></li>
                <li><Link to="profile">Profile</Link></li>
            </ul>
            <a href="#" onClick={handleLogout} className=" right-0 mx-4 flex gap-2 items-center cursor-pointer">
                <FaArrowRightFromBracket />
                <span>
                    Logout
                </span>
            </a>
        </div>
    )
}

export default UserNavbar