import { useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import DonorProvider from '../../utility/DonorProvider'
import FollowCharityButton from '../../utility/FollowCharityButton'

export default function About() {
  const { charitySlug } = useParams()
  const {
    data: charity,
    isPending,
    isError,
    error,
  } = useCharities().get(charitySlug as string)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!charity) {
    return <p>Error: Charity not found.</p>
  }

  console.log('Charity:', charity)

  return (
    <div className="relative h-full w-[90%] overflow-y-scroll">
      <div className="h-auto w-auto overflow-y-scroll bg-background p-6">
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
                    donorId={donor.id}
                    charityId={charity.id}
                  />
                </div>
              )
            }
          </DonorProvider>
        </section>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Vision
        </h2>
        <p>
          <em>*insert vision statement here (with passed-props)*</em>
        </p>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Mission
        </h2>
        <p>
          <em>*insert mission statement here (with passed-props)*</em>
        </p>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Values
        </h2>
        <div className="my-4 flex justify-center p-4">
          <span className="mx-auto text-2xl font-medium text-secondary hover:text-primary">
            Effort
          </span>
          |
          <span className="mx-auto text-2xl font-medium text-secondary hover:text-primary">
            Integrity
          </span>
          |
          <span className="mx-auto text-2xl font-medium text-secondary hover:text-primary">
            Kindness
          </span>
          |
          <span className="mx-auto text-2xl font-medium text-secondary hover:text-primary">
            Generosity
          </span>
          |
          <span className="mx-auto text-2xl font-medium text-secondary hover:text-primary">
            Humility
          </span>
        </div>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Services
        </h2>
        <p>
          <em>
            *insert a summary statement re: the services each charity provides,
            here (with passed-props)*
          </em>
        </p>
        <h2 className="mb-2 mt-6 font-display text-3xl font-medium text-secondary">
          Our Story
        </h2>
        <p className="pb-2">
          This page provides charities with an opportunity to tell their story
          and showcase some impressive statistics; chances are, this will also
          be the landing page for their charity whenever they share their url
          (e.g. https://www.coordinary.org/takatimuhouse)
        </p>
        <p className="pb-2">
          This section will likely be multiple paragraphs long, and for that
          reason we will need to be clever regarding how we will store this
          information, so it may be passed down within props, based on the
          charity name within the URL params...
        </p>
        <p className="pb-2">
          Here is another paragraph for the sake of demonstrating the scroll
          effect; the content was not quite long enough for this to be evident.
        </p>
        <h3 className="my-6 text-center font-display text-2xl font-semibold text-secondary">
          <em>Emphatic Statistic or Quote goes here!</em>
        </h3>
        <p className="pb-2">
          And here is the beginning of one more paragraph, to nicely frame the
          emphatic statement, above.
        </p>
        <div className="m-8 mx-auto w-1/2 pb-2">
          TODO: create a CTA <em>component</em> that prompts our potential
          donors to follow this charity and sign up to their mailing list!!! It
          could begin with something along these lines: to follow our story as
          to continues to unfold, subscribe to our emailing list here and follow
          us on Coordinary!
        </div>
      </div>
    </div>
  )
}
