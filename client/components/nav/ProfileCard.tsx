import SignInButton from '../authentication/SignInButton'
import SignOutButton from '../authentication/SignOutButton'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfileCard() {
  const { user } = useAuth0()

  if (!user)
    return (
      <div className="my-auto flex h-full w-auto py-1">
        <SignInButton />
        <circle className="border-box mx-2 my-auto h-[58px] w-[58px] rounded-full border-2 border-secondary bg-slate-50"></circle>
      </div>
    )

  return (
    <div className="my-auto flex h-full w-auto py-1">
      <SignOutButton />
      <Link to="donor/admin" className="my-auto">
        <img
          src={user.picture}
          alt={user.name}
          className="border-box mx-2 my-auto h-[58px] w-[58px] rounded-full border-2 border-primary/0 hover:border-primary"
        />
      </Link>
    </div>
  )
}
