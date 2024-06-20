import DonorAdminSidebar from '../components/donor_admin_portal/DonorAdminSidebar'
import DonorAdminNav from '../components/donor_admin_portal/DonorAdminNav'
import { Outlet } from 'react-router-dom'

export default function DonorAdminPortal() {
  return (
    <div className="border-box h-screen w-screen border-4 border-red-400">
      <DonorAdminNav />
      <div className="flex h-[90%] w-full">
        <DonorAdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}
