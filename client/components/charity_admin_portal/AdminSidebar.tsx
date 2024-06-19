import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div className="border-box flex h-full w-1/6 flex-col border-4 border-yellow-300">
      <Link
        to=""
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Admin Home
      </Link>
      <Link
        to="dashboard"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Dashboard
      </Link>
      <Link
        to="playground"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Playground
      </Link>
      <Link
        to="sandbox"
        className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
      >
        Sandbox
      </Link>
    </div>
  )
}
