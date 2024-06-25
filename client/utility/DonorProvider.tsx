import Spinner from '../components/Spinner'
import useActiveDonor from '../hooks/useDonors'

interface Props {
  children: (donor: { id: number } | null) => React.ReactNode
}

const DonorProvider: React.FC<Props> = ({ children }) => {
  const { data: donor, isPending, isError, error } = useActiveDonor()

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return <>{children(donor)}</>
}

export default DonorProvider
