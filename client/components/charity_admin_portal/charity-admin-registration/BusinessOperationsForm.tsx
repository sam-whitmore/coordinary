import { CharityInfo } from '../../../../models/charityInfo'
import CharityFormField from './AdminCharityForm'

interface Props {
  formData: CharityInfo
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBack: () => void
  handleNext: () => void
  error: string
}

const BusinessOperationsForm: React.FC<Props> = ({
  formData,
  handleChange,
  handleBack,
  handleNext,
  error,
}) => {
  return (
    <div className="relative mx-auto my-8 flex w-full max-w-2xl flex-col rounded-md bg-white p-8 shadow-md">
      <h2 className="mb-4 font-display text-3xl font-medium capitalize text-primary">
        Charity Operations
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleNext()
        }}
      >
        <div className="space-y-4">
          <CharityFormField
            label="Physical Address"
            name="physicalAddress"
            value={formData.physicalAddress}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Postal Address"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Opening Hours"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Services"
            name="services"
            value={formData.services}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
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
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default BusinessOperationsForm
