import useActiveDonor from '../../hooks/useDonors'
import Spinner from '../Spinner'
import DonationHistory from './DonationHistory'

export default function DonorAdminHistoryContainer() {
  const { isLoading, isError, data } = useActiveDonor()

  if (isLoading) {
    return <Spinner />
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <div className="relative h-full w-[90%] overflow-y-scroll">
      <DonationHistory {...{ id: data.id }} />
    </div>
  )
}
