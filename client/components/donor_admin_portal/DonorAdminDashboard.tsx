import { useAuth0 } from '@auth0/auth0-react'
import { DonorData } from '../../../models/donor'
import ManageDetails from './ManageDetails'
import useActiveDonor from '../../hooks/useDonors'
import { useState } from 'react'

const successMessage = {
  text: 'Submitted Successfully',
  colour: 'green',
}
const failureMessage = {
  text: 'Something went wrong!',
  colour: 'red',
}

export default function DonorAdminDashboard() {
  const { isLoading, isError, data, edit } = useActiveDonor()
  const { getAccessTokenSilently } = useAuth0()
  const [alert, setAlert] = useState(false)
  const [alertData, setAlertData] = useState({
    text: '',
    colour: '',
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  const handleSubmit = async (data: DonorData) => {
    const token = await getAccessTokenSilently()

    const v = await edit.mutateAsync({ token, data })

    if (v?.status === 201) {
      setAlertData(() => successMessage)
    } else {
      setAlertData(() => failureMessage)
    }
    setAlert(() => true)
    setTimeout(() => {
      setAlert(() => false)
    }, 2000)
  }

  return (
    <>
      <div className="border-box h-full w-5/6 border-4 border-green-400">
        <ManageDetails {...{ email: data.email, onSubmit: handleSubmit }} />
      </div>
      <div
        className={`flex ${alertData.colour === 'green' ? 'bg-green-100' : 'bg-red-100'} mb-4 rounded-lg p-4 text-sm ${alertData.colour === 'green' ? 'text-green-700' : 'text-red-700'} ${alert ? '' : 'hidden'}`}
        role="alert"
      >
        <svg
          className="mr-3 inline h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div>
          <span className="font-medium">{alertData.text}</span>{' '}
          {/* {alertData.messageBody} */}
        </div>
      </div>
    </>
  )
}
