import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="relative flex h-auto w-[10%] flex-col flex-grow border-r-2 border-secondary hover:border-primary">
      <div className="flex h-auto w-full flex-col">
        <Link
          to=""
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          About Us
        </Link>
        <Link
          to="posts"
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Our Impact
        </Link>
        <Link
          to="donate"
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Our Registries
        </Link>
        <Link
          to="donors"
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Our Donors
        </Link>
        <Link
          to="contact"
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Contact Us
        </Link>
        <Link
          to="admin"
          className="text-secondary hover:text-primary p-2 border-b-2 border-secondary hover:border-primary"
        >
          Go to Admin Portal
        </Link>
      </div>
    </div>
  )
}
