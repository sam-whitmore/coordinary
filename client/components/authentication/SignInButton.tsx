import { useAuth0 } from '@auth0/auth0-react'

export default function SignInButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button className="rtl text-2xl text-primary font-wix-display" onClick={() => loginWithPopup()}>
      Sign In
    </button>
  )
}
