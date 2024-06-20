import useActiveDonor from '../../hooks/useDonors'
import ManageCharities from './ManageCharities'

export default function DonorManageFollowed() {
  const { isLoading, isError, data } = useActiveDonor()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <>
      <ManageCharities {...{ userId: data.id }} />
    </>
  )
}
