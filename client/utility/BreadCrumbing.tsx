import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="w-full border-b-2 border-secondary bg-gray-100 py-1">
      <ul className="flex items-center space-x-2 px-8">
        <li className="text-primary">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const name = value.charAt(0).toUpperCase() + value.slice(1)

          return (
            <li key={to} className="flex items-center text-primary">
              <span className="mx-2">/</span>
              <Link to={to} className="hover:underline">
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
