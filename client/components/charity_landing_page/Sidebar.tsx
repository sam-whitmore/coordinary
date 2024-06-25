import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="relative flex h-auto w-[10%] flex-grow flex-col border-r-2 border-secondary hover:border-primary">
      <div className="flex h-auto w-full flex-col">
        <Link
          to=""
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          About Us
        </Link>
        <Link
          to="posts"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Our Impact
        </Link>
        <Link
          to="donate"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Our Registries
        </Link>
        <Link
          to="donors"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Our Donors
        </Link>
        <Link
          to="contact"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Contact Us
        </Link>
        <Link
          to="admin"
          className="border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
        >
          Go to Admin Portal
        </Link>
      </div>
    </div>
  )
}
