import DonorAdminSidebar from '../components/donor_admin_portal/DonorAdminSidebar'
import DonorAdminNav from '../components/donor_admin_portal/DonorAdminNav'
import { Outlet } from 'react-router-dom'

export default function DonorAdminPortal() {
  return (
    <div className="h-screen w-screen">
      <DonorAdminNav />
      <div className="flex h-[90%] w-full">
        <DonorAdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}
