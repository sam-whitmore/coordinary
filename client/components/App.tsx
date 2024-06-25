import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function App() {
  return (
    <div className="app h-screen w-screen bg-background">
      <nav className="sticky">
        <Nav />
      </nav>

      <Outlet />
    </div>
  )
}
