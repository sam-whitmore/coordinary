import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-full h-[90%] border-box border-4 border-green-400">
      <Link>About Us</Link>
      <br />
      <Link>Our Work</Link>
      <br />
      <Link>Our Registries</Link>
    </div>
  )
}