import ManageDetails from '../components/donor_profile_page/ManageDetails'
import useGetActiveDonor from '../hooks/useDonors'

export default function DonorProfilePage() {
  const { isLoading, isError, data } = useGetActiveDonor()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  const handleSubmit = () => {
    //mutation to save email change lives here
  }

  return (
    <>
      <ManageDetails {...{ email: data.email, onSubmit: handleSubmit }} />
    </>
  )
}
