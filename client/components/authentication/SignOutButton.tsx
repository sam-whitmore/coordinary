import { useAuth0 } from '@auth0/auth0-react'

export default function SignOutButton() {
  const { logout } = useAuth0()

  return (
    <button
      className="rtl text-xl text-secondary hover:text-primary font-display mx-2"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Sign Out
    </button>
  )
}
