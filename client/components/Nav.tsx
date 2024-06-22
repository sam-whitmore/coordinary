import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from './authentication/SignInButton'
import ProfileCard from './nav/ProfileCard'

export default function Nav() {
  const { user } = useAuth0()

  return (
    <div className="flex h-[10%] max-h-[80px] min-h-[60px] w-full justify-between border-b-2 border-secondary hover:border-primary">
      <div className="mx-2 my-auto p-2">
        <Link
          to="/"
          className="font-display text-3xl font-medium text-secondary hover:text-primary"
        >
          Coordinary
        </Link>
      </div>
      <div className="flex w-auto">
        <Link
          to="coordinary"
          className="my-auto px-4 font-display text-lg text-secondary hover:text-primary"
        >
          About Us
        </Link>
        <Link
          to="coordinary/posts"
          className="my-auto px-4 font-display text-lg text-secondary hover:text-primary"
        >
          Our Posts
        </Link>
        <Link
          to="coordinary/donate"
          className="my-auto px-4 font-display text-lg text-secondary hover:text-primary"
        >
          Our Register
        </Link>
        <Link
          to="coordinary/contact"
          className="my-auto px-4 font-display text-lg text-secondary hover:text-primary"
        >
          Contact Us
        </Link>
      </div>
      <div className="mx-2 my-auto h-full w-auto py-1">
        {user ? <ProfileCard {...user} /> : <SignInButton />}
      </div>
    </div>
  )
}
