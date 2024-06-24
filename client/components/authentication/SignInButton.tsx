import { useAuth0 } from '@auth0/auth0-react'

export default function SignInButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button
      className="rtl mx-2 font-display text-2xl font-medium text-secondary hover:text-primary"
      onClick={() => loginWithPopup()}
    >
      Sign In
    </button>
  )
}
