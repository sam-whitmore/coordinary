import Sidebar from '../components/charity_landing_page/Sidebar'
import { Outlet } from 'react-router-dom'

export default function CharityLandingPage() {
  return (
    <div className="flex h-[90%] w-screen">
      <Sidebar />
      <Outlet />
    </div>
  )
}
