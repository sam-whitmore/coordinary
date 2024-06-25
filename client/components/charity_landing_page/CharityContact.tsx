import { useParams } from 'react-router-dom'
import useCharitiesInformation from '../../hooks/useCharitiesInformation'
import Spinner from '../Spinner'

export default function CharityContact() {
  const { charitySlug } = useParams()
  const {
    data: charity,
    isPending,
    isError,
    error,
  } = useCharitiesInformation().info(charitySlug as string)

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!charity) {
    return <p>Error: Charity not found.</p>
  }

  return (
    <div className="relative h-[92%] w-[90%] overflow-y-scroll">
      <div
        style={{ '--image-url': `url('/uploads/${charity.image}')` }}
        className={`fixed h-1/2 w-full overflow-x-hidden ${charity.image ? `bg-[image:var(--image-url)]` : `bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]`} bg-fixed object-cover`}
      ></div>
      <div className="absolute left-0 top-1/2 h-auto w-full bg-background p-6">
        <h1 className="mb-4 font-display text-6xl font-medium capitalize text-secondary">
          Contact{' '}
          <span className="font-semibold text-primary">{charity.name}</span>
        </h1>
        <h2 className="mb-2 text-lg">
          Our Physical Address:{' '}
          <span className="font-normal">{charity.physicalAddress}</span>
        </h2>
        <h2 className="mb-2 text-lg">
          Our Postal Address:{' '}
          <span className="font-normal">{charity.postalAddress}</span>
        </h2>
        <h2 className="mb-2 text-lg">
          Our Opening Hours:{' '}
          <span className="font-normal">{charity.openingHours}</span>
        </h2>
        <br />
        <h2 className="mb-2 text-lg">
          Our Phone Numbers:
          <span className="font-normal">
            <a
              href={`tel:${charity.phone}`}
              className="hover:text-primary-dark ml-2 text-primary"
            >
              {charity.phone}
            </a>
          </span>
        </h2>
        <h2 className="mb-2 text-lg">
          Our Email Address:
          <span className="font-normal">
            <a
              href={`mailto:${charity.email}`}
              className="hover:text-primary-dark ml-2 text-primary"
            >
              {charity.email}
            </a>
          </span>
        </h2>
      </div>
    </div>
  )
}
