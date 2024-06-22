import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function Sidebar() {
  const { user } = useAuth0()

  return (
    <div className="relative flex h-[90%] w-full flex-col">
      <div className="flex h-auto w-full flex-col">
        <Link
          to=""
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          About Us
        </Link>
        <Link
          to="posts"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Our Impact
        </Link>
        <Link
          to="donate"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Our Registries
        </Link>
        <Link
          to="contact"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Contact Us
        </Link>
        <Link
          to="playground"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Charity Playground
        </Link>
        <Link
          to="sandbox"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Charity Sandbox
        </Link>
        <Link
          to="admin"
          className="mb-2 bg-slate-50 p-2 shadow-md"
        >
          Go to Admin Portal
        </Link>
      </div>
      <div className="absolute bottom-0 w-full py-6 text-center">
        {user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
