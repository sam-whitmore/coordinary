import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="border-box flex h-[90%] w-full flex-col border-4 border-green-400">
      <Link
        to=""
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        About Us
      </Link>
      <Link
        to="posts"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Our Work
      </Link>
      <Link
        to="donate"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Our Registries
      </Link>
      <Link
        to="playground"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Charity Playground
      </Link>
      <Link
        to="sandbox"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Charity Sandbox
      </Link>
      <Link
        to="admin"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Go to Admin Portal
      </Link>
    </div>
  )
}
