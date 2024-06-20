import { useAuth0 } from '@auth0/auth0-react'
import { DonorData } from '../../../models/donor'
import ManageDetails from './ManageDetails'
import useActiveDonor from '../../hooks/useDonors'
import ManageCharities from './ManageCharities'
import DonationHistory from './DonationHistory'

export default function DonorAdminSandbox() {
  const { isLoading, isError, data, edit } = useActiveDonor()
  const { getAccessTokenSilently } = useAuth0()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  const handleSubmit = async (data: DonorData) => {
    const token = await getAccessTokenSilently()

    await edit.mutateAsync({ token, data })
  }

  return (
    <>
      <ManageDetails {...{ email: data.email, onSubmit: handleSubmit }} />
      <ManageCharities {...{ userId: data.id }} />
      <DonationHistory {...{ id: data.id }} />
    </>
  )
}
