import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton'
import ProfileCard from './nav/ProfileCard'

export default function Nav() {
  const { user } = useAuth0()

  return (
    <div className="flex h-[10%] min-h-[60px] max-h-[80px] w-full justify-between border-b-2 border-primary">
      <div className="mx-2 my-auto p-2">
        <button className="font-display text-3xl font-medium text-primary underline-offset-2 hover:underline">
          Coordinary
        </button>
      </div>
      <div className="flex w-auto">
        <Link
          to="coordinary"
          className="my-auto px-4 font-display text-lg text-secondary underline-offset-2 hover:underline"
        >
          About Us
        </Link>
        <Link
          to="coordinary/posts"
          className="my-auto px-4 font-display text-lg text-secondary underline-offset-2 hover:underline"
        >
          Our Posts
        </Link>
        <Link
          to="coordinary/donate"
          className="my-auto px-4 font-display text-lg text-secondary underline-offset-2 hover:underline"
        >
          Our Register
        </Link>
        <Link
          to="coordinary/contact"
          className="my-auto px-4 font-display text-lg text-secondary underline-offset-2 hover:underline"
        >
          Contact Us
        </Link>
      </div>
      <div className="h-full w-auto py-1 my-auto mx-2">
        {user ? <ProfileCard {...user} /> : <SignInButton />}
      </div>
    </div>
  )
}
