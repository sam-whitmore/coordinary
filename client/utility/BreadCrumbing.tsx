import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="w-auto py-1 mx-2 my-auto p-2">
      <ul className="flex space-x-2 font-display font-medium text-3xl">
        <li className="text-secondary">
          <Link to="/" className="hover:text-primary">
            Coordinary
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const name = value.charAt(0).toUpperCase() + value.slice(1)

          return (
            <li key={to} className="flex text-secondary">
              <span className="mx-2">/</span>
              <Link to={to} className="hover:text-primary">
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
