import UserNavbar from "./UserNavbar"
import { authService } from "../../Service/authService"
import { Outlet, Route, Routes } from "react-router-dom"
import UserDashboardHero from "./UserDashboardHero"
import UserProfile from "./UserProfile"
import UserViewClasses from "./UserViewClasses"


const UserLayout = () => {
    return (
        <>
            <UserNavbar logout={authService.logOut} />
            <Outlet />
        </>
    )
}


const UserDashboard = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<UserDashboardHero />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="view_classes" element={<UserViewClasses />} />
            </Route>
        </Routes>
    )
}

export default UserDashboard