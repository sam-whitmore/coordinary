import useActiveDonor from '../../hooks/useDonors'
import DonationHistory from './DonationHistory'

export default function DonorAdminHistoryContainer() {
  const { isLoading, isError, data } = useActiveDonor()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <div className="border-box h-full w-5/6 border-4 border-green-400">
      <DonationHistory {...{ id: data.id }} />
    </div>
  )
}
