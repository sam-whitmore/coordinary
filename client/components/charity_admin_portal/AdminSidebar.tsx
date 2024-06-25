import { Link, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function AdminSidebar() {
  const { user } = useAuth0()
  const { charitySlug } = useParams()

  return (
    <div className="relative flex h-auto w-[10%] flex-col border-r-2 border-secondary hover:border-primary">
      <div className="flex h-auto w-full flex-col">
        <Link
          to=""
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Admin Home
        </Link>
        <Link
          to="dashboard"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          to="registers"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Items
        </Link>
        <Link
          to="manageregisters"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Registers
        </Link>
        <Link
          to={`/${charitySlug}`}
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Charity Landing Page
        </Link>
      </div>
    </div>
  )
}
