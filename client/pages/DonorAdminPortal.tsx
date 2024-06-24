import DonorAdminSidebar from '../components/donor_admin_portal/DonorAdminSidebar'
import { Outlet } from 'react-router-dom'

export default function DonorAdminPortal() {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="flex h-[100%] w-full">
        <DonorAdminSidebar />
        <Outlet />
      </div>
    </div>
  )
}
