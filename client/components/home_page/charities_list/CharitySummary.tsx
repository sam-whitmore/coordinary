import { Link } from 'react-router-dom'
import { Charity } from '../../../../models/charity'
import useCharities from '../../../hooks/useCharitiesInformation'

export default function CharitySummary(charity: Charity) {
  const {
    data: charityInfo,
    isPending,
    isError,
    error,
  } = useCharities().info(charity.slug)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!charityInfo) {
    return <p>Error: Charity not found.</p>
  }

  return (
    <Link to={`/${charity.slug}`}>
      <div className="mx-2 my-4 rounded-2xl border-2 border-secondary p-4 hover:border-primary">
        <h2 className="font-display text-2xl font-medium text-secondary hover:text-primary">
          {charity.name}
        </h2>
        <h3 className="mt-2 text-sm italic">{charityInfo.vision}</h3>
      </div>
    </Link>
  )
}
