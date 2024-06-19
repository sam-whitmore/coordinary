import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignInButton from '../authentication/SignInButton' 
import SignOutButton from '../authentication/SignOutButton'

export default function Nav() {
  const { user } = useAuth0()

  return (
    <div className="border-box flex h-[10%] w-full justify-between border-4 border-orange-400">
      <div className="mx-4 my-auto p-2">
        <button className="text-2xl">Coordinary.org</button>
      </div>
      <div className="flex justify-center">
        <Link to="charity-name" className="my-auto px-4">
          About Us
        </Link>
        <Link to="charity-name/posts" className="my-auto px-4">
          Our Posts
        </Link>
        <Link to="charity-name/donate" className="my-auto px-4">
          Our Register
        </Link>
        <Link to="charity-name/contact" className="my-auto px-4">
          Contact Us
        </Link>
      </div>
      <div className="mx-4 my-auto p-2">
        { user ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  )
}
