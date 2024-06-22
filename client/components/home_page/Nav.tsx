import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'

export default function Nav() {
  const { user } = useAuth0()

  return (
    <div className="flex h-[10%] w-full justify-between">
      <div className="mx-4 my-auto p-2">
        <button className="text-3xl font-medium font-display text-primary">Coordinary</button>
      </div>
      <div className="flex justify-center">
        <Link to="coordinary" className="my-auto px-4 font-display text-lg text-secondary">
          About Us
        </Link>
        <Link to="coordinary/posts" className="my-auto px-4 font-display text-lg text-secondary">
          Our Posts
        </Link>
        <Link to="coordinary/donate" className="my-auto px-4 font-display text-lg text-secondary">
          Our Register
        </Link>
        <Link to="coordinary/contact" className="my-auto px-4 font-display text-lg text-secondary">
          Contact Us
        </Link>
      </div>
      <div className="mx-4 my-auto p-2">
        {user ? (
          <div>
            <Link to="donor/admin" className="font-display text-primary">User Admin Portal</Link>
            <SignOutButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  )
}
