import AdminSidebar from '../components/charity_admin_portal/AdminSidebar'
import { Outlet } from 'react-router-dom'

// Outlet's index is AdminDashboard.tsx

export default function CharityAdminPortal() {
  return (
    <div className="h-screen w-screen">
      {/* <AdminNav /> */}
      <div className="flex h-[90%] w-full">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}
