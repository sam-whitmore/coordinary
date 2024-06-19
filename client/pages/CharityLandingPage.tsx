import Sidebar from '../components/charity_landing_page/Sidebar'
import Registries from '../components/charity_landing_page/Registries'

export default function CharityLandingPage() {
  return (
    <div className="border-box flex h-screen w-screen border-4 border-red-400">
      <div className="border-box border-4 border-orange-400 h-full w-1/6">
        <button className="border-box h-[10%] w-full border-4 border-yellow-300">
          LOGO
        </button>
        <Sidebar />
      </div>
      <Registries />
    </div>
  )
}
