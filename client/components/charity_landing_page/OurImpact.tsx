import { useParams } from "react-router-dom"
import useCharities from "../../hooks/useCharities"

export default function OurImpact() {

  const { charitySlug } = useParams() 
  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug as string)

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div className="relative h-full w-[90%] overflow-y-scroll">
      <div className="h-auto w-auto rounded-2xl p-6">
      <h1 className="mb-4 text-6xl font-medium font-display text-secondary capitalize">Latest <span className="text-primary font-semibold">News</span></h1>
      </div>
    </div>
  )
}