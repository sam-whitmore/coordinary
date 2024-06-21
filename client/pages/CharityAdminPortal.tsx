import AdminNav from "../components/charity_admin_portal/AdminNav"
import AdminSidebar from "../components/charity_admin_portal/AdminSidebar"
import { Outlet, useParams } from "react-router-dom"
import useCharities from "../hooks/useCharities"


// Outlet's index is AdminDashboard.tsx

export default function CharityAdminPortal() {

  const { charitySlug } = useParams()

  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug ?? "coordinary")

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

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