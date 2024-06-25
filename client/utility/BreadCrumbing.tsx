import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  const maxVisibleBreadcrumbs = 1
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const visiblePathnames =
    pathnames.length > maxVisibleBreadcrumbs ? pathnames.slice(0, 1) : pathnames
  const hiddenPathnames =
    pathnames.length > maxVisibleBreadcrumbs ? pathnames.slice(1) : []

  return (
    <nav className="mx-2 my-auto w-auto p-2 py-1">
      <ul className="flex space-x-2 font-display text-3xl font-medium">
        <li className="text-secondary">
          <Link to="/" className="hover:text-primary">
            Coordinary
          </Link>
        </li>
        {visiblePathnames.map((value, index) => {
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
        {hiddenPathnames.length > 0 && (
          <li className="relative flex text-secondary">
            <button
              onClick={handleDropdownToggle}
              className="hover:text-primary"
            >
              ...
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 rounded border border-gray-300 bg-white shadow-lg">
                {hiddenPathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + visiblePathnames.length + 1).join('/')}`
                  const name = value.charAt(0).toUpperCase() + value.slice(1)
                  return (
                    <li key={to}>
                      <Link
                        to={to}
                        className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
