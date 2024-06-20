import { useAuth0 } from '@auth0/auth0-react'
import ManageDetails from '../components/donor_admin_portal/ManageDetails'
import useActiveDonor from '../hooks/useDonors'
import { DonorData } from '../../models/donor'

export default function DonorProfilePage() {
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
    </>
  )
}
