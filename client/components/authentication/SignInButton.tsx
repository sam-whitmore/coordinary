import { useAuth0 } from '@auth0/auth0-react'

export default function SignInButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button
      className="rtl border-box rounded-lg border-2 border-primary/0 font-display text-2xl text-primary underline-offset-[3px] hover:border-primary hover:underline"
      onClick={() => loginWithPopup()}
    >
      Sign In
    </button>
  )
}
