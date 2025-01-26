import AdminClasses from './Components/Admin/AdminClasses'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminGradingSystem from './Components/Admin/AdminGradingSystem'
import AdminLeaveApproval from './Components/Admin/AdminLeaveApproval'
import AdminReports from './Components/Admin/AdminReports'
import AdminStudents from './Components/Admin/AdminStudents'
import UserDashboard from './Components/User/UserDashboard'
import UserProfile from './Components/User/UserProfile'
import UserViewClasses from './Components/User/UserViewClasses'
import './index.css'
import LoginLayout from "./Pages/LoginLayout"
import { Route, Routes } from "react-router-dom"

import { AdminPrivateRoute } from './routes/adminPrivateRoute'
import { PrivateRoute } from './routes/privateRoute'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<LoginLayout />} />
        <Route path='/view_classes' element={<UserViewClasses />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/' element={<LoginLayout />} />

        <Route path='/students' element={<AdminStudents />} />
        <Route path='/students/reports' element={<AdminReports />} />
        <Route path='/grading' element={<AdminGradingSystem />} />
        <Route path='/classes' element={<AdminClasses />} />
        <Route path='/Leave_Approval' element={<AdminLeaveApproval />} /> */}

        <Route path='/' element={<LoginLayout />} />

        <Route path='/admin-dashboard/*' element=
          {
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />

        <Route path='/user-dashboard/*' element=
          {
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />

        <Route path='/*' element={<LoginLayout />} />

      </Routes>
    </>
  )
}

export default App
