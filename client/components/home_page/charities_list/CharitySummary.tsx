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
    <div className="w-100 h-168 mx-2 my-4 flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-secondary shadow-lg hover:border-primary">
      <div>
        <img
          src={charityInfo.imageUrl} // Assuming charityInfo contains an imageUrl field
          alt={charity.name}
          className="h-64 w-full object-cover"
        />
        <div className="p-4">
          <Link
            to={`/${charity.slug}`}
            className="font-display text-2xl font-medium text-secondary hover:text-primary"
          >
            {charity.name}
          </Link>
          <p className="mt-2 text-sm italic">{charityInfo.vision}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="mt-2 text-sm">{charityInfo.mission}</p>
      </div>
    </div>
  )
}
