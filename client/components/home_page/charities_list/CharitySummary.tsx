import { Link } from 'react-router-dom'
import { Charity } from '../../../../models/charity'
import useCharities from '../../../hooks/useCharitiesInformation'
import FollowCharityButton from '../../../utility/FollowCharityButton'
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

  const donorId = 1 // Replace with actual donorId

  return (
    <div className="relative mx-auto my-4 flex w-full max-w-xs flex-col justify-between overflow-hidden rounded-2xl border-2 border-secondary bg-white shadow-lg duration-300 hover:scale-105 hover:border-primary">
      <div className="relative">
        <img
          src={charityInfo.image || 'uploads/placeholder.png'}
          alt={charity.name}
          className="h-64 w-full rounded-t-2xl object-cover"
        />
        <div className="absolute right-2 top-2">
          <FollowCharityButton donorId={donorId} charityId={charity.id} />
        </div>
        <div className="p-4">
          <Link
            to={`/${charity.slug}`}
            className="font-display text-2xl font-medium text-primary hover:text-accent"
          >
            {charity.name}
          </Link>
          <h3 className="mt-4 text-lg font-semibold text-secondary">Vision</h3>
          <p className="mt-2 text-sm italic text-secondary">
            {charityInfo.vision}
          </p>
          <h3 className="mt-4 text-lg font-semibold text-secondary">Mission</h3>
          <p className="mt-2 text-sm text-secondary">{charityInfo.mission}</p>
        </div>
      </div>
    </div>
  )
}
