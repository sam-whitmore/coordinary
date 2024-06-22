import { useParams } from "react-router-dom"
import useCharities from "../../hooks/useCharities"

// TODO: the background image is flowing above the scroll bar on the side of the window because it's div is currently set to 'fixed.' bg-fixed can remain as it is; the initial fixed should probably be updated at some stage... non-urgent.
// TODO: Add Contents Component that allows users to quickly jump to each section of this page, fixed to the top-right side of the text-based section.

export default function OurDonors() {

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
      <h1 className="mb-4 text-6xl font-medium font-display text-secondary capitalize">Our <span className="text-primary font-semibold">Donors</span></h1>
      </div>
    </div>
  )
}
