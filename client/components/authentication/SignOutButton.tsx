import { useAuth0 } from '@auth0/auth0-react'

export default function SignOutButton() {
  const { logout } = useAuth0()

  return (
    <button
      className="rtl text-xl text-primary font-display hover:underline underline-offset-[3px] mx-2"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Sign Out
    </button>
  )
}
