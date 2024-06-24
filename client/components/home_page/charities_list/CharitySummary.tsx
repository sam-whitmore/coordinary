import { Link } from 'react-router-dom'
import { Charity } from '../../../../models/charity'
import useCharities from '../../../hooks/useCharitiesInformation'

export default function CharitySummary(charity: Charity) {

  const { data: charityInfo, isPending, isError, error } = useCharities().info(charity.slug)

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
    <div className="my-4 h-auto w-full px-8 text-right">
      <Link
        to={charity.slug}
        className="font-display text-xl font-medium text-secondary hover:text-primary"
      >
        {charity.name}
      </Link>
      <h3 className="text-sm italic">
        {charityInfo.vision}
      </h3>
    </div>
  )
}
