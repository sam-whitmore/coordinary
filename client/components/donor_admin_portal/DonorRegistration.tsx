import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useAddDonor } from '../../hooks/useDonors'
import { useNavigate } from 'react-router-dom'

const UserDetailsForm = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const addDonor = useAddDonor()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!user || !user.sub) {
      console.error('User is not authenticated')
      return
    }

    const token = await getAccessTokenSilently()

    const payload = { token, data: { email, auth0Id: user.sub } }
    console.log('Submitting payload:', payload)

    addDonor.mutate(payload, {
      onSuccess: () => {
        setIsSuccess(true)
        setError('')
        navigate('/donor/admin')
      },
      onError: (error) => {
        console.error('Error adding donor:', error)
        setError('Failed to add donor. Please try again.')
      },
    })
  }

  return (
    <div>
      {isSuccess ? (
        <div>Redirecting to admin portal...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-lg">
              Email:
            </label>
            <input
              id="email"
              className="mx-5"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default UserDetailsForm
