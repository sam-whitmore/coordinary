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
    <div className="w-100 h-168 mx-2 my-4 flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-secondary bg-white shadow-lg hover:border-primary">
      <div>
        <img
          src={charityInfo.image || 'uploads/placeholder.png'}
          alt={charity.name}
          className="h-64 w-full rounded-t-2xl object-cover"
        />
        <div className="p-4">
          <Link
            to={`/${charity.slug}`}
            className="font-display text-2xl font-medium text-primary hover:text-accent"
          >
            {charity.name}
          </Link>
          <h3 className="mt-4 text-lg font-semibold text-secondary">Vision</h3>
          <p className="mt-2 text-sm italic ">{charityInfo.vision}</p>
          <h3 className="mt-4 text-lg font-semibold text-secondary">Mission</h3>
          <p className="mt-2 text-sm ">{charityInfo.mission}</p>
        </div>
      </div>
    </div>
  )
}
