import { useParams } from "react-router-dom"
import useCharitiesInformation from "../../hooks/useCharitiesInformation"

export default function CharityContact() {

  const { charitySlug } = useParams()
  const {
    data: charity,
    isPending,
    isError,
    error,
  } = useCharitiesInformation().info(charitySlug as string)

  if (isPending) {
    console.log('loading...')
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!charity) {
    return <p>Error: Charity not found.</p>
  }

  return (
    <div className="relative h-full w-[90%] overflow-y-scroll">
      <div className="h-auto w-auto rounded-2xl p-6">
        <h1 className="mb-4 text-6xl font-medium font-display text-secondary capitalize">Contact <span className="text-primary font-semibold">{charity.name}</span></h1>
        <h2>Our Physical Address: <span>{charity.physicalAddress}</span></h2>
        <h2>Our Postal Address: <span>{charity.postalAddress}</span></h2>
        <h2>Our Opening Hours: <span>{charity.openingHours}</span></h2>
        <br />
        <h2>Our Phone Numbers: <span>{charity.phone}</span></h2>
        <h2>Our Email Address: <span>{charity.email}</span></h2>
      </div>
    </div>
  )
}