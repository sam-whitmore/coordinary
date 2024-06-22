import SignOutButton from '../../authentication/SignOutButton'
import { Link } from 'react-router-dom'
import { User } from '@auth0/auth0-react'

export default function ProfileCard(user: User) {
  return (
    <div className="flex h-full w-full rounded-xl">
      <Link to="donor/admin" className="text-xl font-display text-secondary my-auto mx-2 pl-2 hover:text-primary">
        My Portal
      </Link>
      <SignOutButton />
      <img
        src={user.picture}
        alt={user.name}
        className="h-full w-auto rounded-full p-2"
      />
    </div>
  )
}
