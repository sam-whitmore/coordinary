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
    <div className="relative h-[92%] w-[90%] overflow-y-scroll">
      <div className="fixed h-1/2 w-full overflow-x-hidden bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover"></div>
      <div className="absolute top-1/2 left-0 h-auto w-full bg-background p-6">
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