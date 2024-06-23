import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function DonorAdminSidebar() {
  const { user } = useAuth0()

  return (
    <div className="relative flex h-auto w-[10%] flex-grow flex-col border-r-2 border-secondary hover:border-primary">
      <div className="flex h-auto w-full flex-col">
        {/* <Link
          to=""
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Admin Home
        </Link> */}
        <Link
          to=""
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          to="donation-history"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Donation History
        </Link>
        <Link
          to="followed-charities"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Followed Charities
        </Link>
      </div>
      <div className="border-box absolute bottom-0 w-full border-4 border-sky-300 py-2 text-center">
        {user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
