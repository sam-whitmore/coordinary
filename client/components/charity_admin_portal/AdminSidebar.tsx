import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function AdminSidebar() {
  const { user } = useAuth0()

  return (
    <div className="relative border-box flex h-full w-1/6 flex-col border-4 border-yellow-300">
      <div className="border-box flex h-auto w-full flex-col border-4 border-purple-300">
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
        <Link
          to="../charity-name"
          className="border-box mb-2 border-4 border-slate-200 bg-slate-50 p-2 shadow-md"
        >
          Go to Charity Landing Page
        </Link>
      </div>
      <div className="absolute border-box border-4 border-sky-300 bottom-0 w-full text-center py-2">
        { user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
