import AdminNav from "../components/charity_admin_portal/AdminNav"
import AdminSidebar from "../components/charity_admin_portal/AdminSidebar"
import { Outlet } from "react-router-dom"

// Outlet's index is AdminDashboard.tsx

export default function CharityAdminPortal() {
  return (
    <div className="w-screen h-screen border-box border-4 border-red-400">
      <AdminNav />
      <div className="w-full h-[90%] flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}