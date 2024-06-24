import { CharityData } from '../../../../models/charity'
import { CharityInfo } from '../../../../models/charityInfo'

interface Props {
  basicFormData: CharityData
  expandedFormData: CharityInfo
  handleBack: () => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const PreviewForm: React.FC<Props> = ({
  basicFormData,
  expandedFormData,
  handleBack,
  handleSubmit,
}) => {
  return (
    <div className="relative mx-auto my-8 flex w-full max-w-2xl flex-col rounded-md bg-white p-8 shadow-md">
      <h2 className="mb-4 font-display text-3xl font-medium capitalize text-primary">
        Review
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-secondary">
            Basic Details
          </h3>
          <p>Name: {basicFormData.name}</p>
          <p>Category ID: {basicFormData.categoryId}</p>
          <p>Phone: {basicFormData.phone}</p>
          <p>Email: {basicFormData.email}</p>
          <p>Location: {basicFormData.location}</p>
          <p>Slug: {basicFormData.slug}</p>

          <h3 className="text-xl font-semibold text-secondary">
            Business Operations
          </h3>
          <p>Physical Address: {expandedFormData.physicalAddress}</p>
          <p>Postal Address: {expandedFormData.postalAddress}</p>
          <p>Opening Hours: {expandedFormData.openingHours}</p>
          <p>Services: {expandedFormData.services}</p>

          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p>Vision: {expandedFormData.vision}</p>
          <p>Mission: {expandedFormData.mission}</p>
          <p>Values: {expandedFormData.values}</p>

          <h3 className="text-xl font-semibold ">Story</h3>
          <p>Story: {expandedFormData.story}</p>
          <p>Emphatic: {expandedFormData.emphatic}</p>
          <p>CTA Statement: {expandedFormData.ctaStatement}</p>
          <p>Stakeholders: {expandedFormData.stakeholders}</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className="rounded bg-gray-500 px-4 py-2 text-white"
            type="button"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default PreviewForm
