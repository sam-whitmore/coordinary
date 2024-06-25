import { useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import FollowCharityButton from '../../utility/FollowCharityButton'

export default function OurImpact() {
  const { charitySlug } = useParams()
  const {
    data: charity,
    isPending,
    isError,
    error,
  } = useCharities().get(charitySlug as string)

  const donorId = 1

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="relative h-[92%] w-[90%] overflow-y-scroll">
      <div className="fixed h-1/2 w-full overflow-x-hidden bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover"></div>
      <div className="absolute left-0 top-1/2 h-auto w-full bg-background p-6">
        <h1 className="mb-4 font-display text-6xl font-medium capitalize text-secondary">
          Latest <span className="font-semibold text-primary">News</span>
        </h1>
        <div className="rounded-lg bg-white p-8 text-center shadow-md">
          <p className="text-lg text-secondary">
            {charity.name} is yet to make their first post.
          </p>
          <p className="text-lg text-secondary">follow bellow for updates</p>
          <FollowCharityButton donorId={donorId} charityId={charity.id} />
        </div>
      </div>
    </div>
  )
}
