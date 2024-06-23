import SignOutButton from '../authentication/SignOutButton'
import { Link } from 'react-router-dom'
import { User } from '@auth0/auth0-react'

export default function ProfileCard(user: User) {
  return (
    <div className="flex h-full w-full rounded-xl">
      <Link
        to="donor/admin"
        className="mx-2 my-auto pl-2 font-display text-xl text-secondary hover:text-primary"
      >
        My Portal
      </Link>
      <SignOutButton />
      <img
        src={user.picture}
        alt={user.name}
        className="h-20 w-20 rounded-full p-2"
      />
    </div>
  )
}
