import { useParams } from 'react-router-dom'
import useCharitiesInformation from '../../hooks/useCharitiesInformation'
import DonorProvider from '../../utility/DonorProvider'
import FollowCharityButton from '../../utility/FollowCharityButton'

export default function About() {
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

  const storyParagraphs = charity.story.split('\n')
  const values = charity.values.split(';')
  const services = charity.services.split(';')

  return (
    <div className="relative h-[92%] w-[90%] overflow-y-scroll">
      <div
        style={{ '--image-url': `url('/uploads/${charity.image}')` }}
        className={`fixed h-1/2 w-full overflow-x-hidden ${charity.image ? `bg-[image:var(--image-url)]` : `bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]`} bg-fixed object-cover`}
      ></div>
      <div className="absolute left-0 top-1/2 h-auto w-full bg-background p-6">
        <section className="flex items-center">
          <h1 className="mb-4 font-display text-6xl font-medium capitalize text-secondary">
            About{' '}
            <span className="font-semibold text-primary">{charity.name}</span>
          </h1>
          <DonorProvider>
            {(donor) =>
              donor && (
                <div className="ml-4">
                  <FollowCharityButton
                    {...{
                      donorId: donor.id,
                      charityId: charity.charityId,
                    }}
                  />
                </div>
              )
            }
          </DonorProvider>
        </section>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Vision
        </h2>
        <p>{charity.vision}</p>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Mission
        </h2>
        <p>{charity.mission}</p>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Values
        </h2>
        <div className="my-4 flex justify-center p-4">
          {values.map((value, i) => (
            <span
              key={i}
              className="mx-auto text-2xl font-medium text-secondary hover:text-primary"
            >
              {value}
            </span>
          ))}
        </div>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Services
        </h2>
        <ul>
          {services.map((service, i) => (
            <li key={i} className="mb-2">
              {service}
            </li>
          ))}
        </ul>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Story
        </h2>
        <div className="pb-2">
          {storyParagraphs.map((paragraph, i) => (
            <p key={i} className="mb-2 max-w-[1200px]">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="m-8 mx-auto w-1/2 pb-2">{charity.ctaStatement}</div>
      </div>
    </div>
  )
}
