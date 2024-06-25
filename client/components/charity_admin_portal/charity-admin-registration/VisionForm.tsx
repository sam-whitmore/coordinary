import { CharityInfo } from '../../../../models/charityInfo'
import CharityFormField from './AdminCharityFormField'

interface Props {
  formData: CharityInfo
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBack: () => void
  handleNext: () => void
  error: string
}

const VisionForm: React.FC<Props> = ({
  formData,
  handleChange,
  handleBack,
  handleNext,
  error,
}) => {
  return (
    <div className="relative mx-auto my-8 flex w-full max-w-2xl flex-col rounded-md bg-white p-8 shadow-md">
      <h2 className="mb-4 font-display text-3xl font-medium capitalize text-primary">
        Your Vision
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleNext()
        }}
      >
        <div className="space-y-4">
          <CharityFormField
            label="Vision"
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Mission"
            name="mission"
            value={formData.mission}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Values"
            name="values"
            value={formData.values}
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

export default VisionForm
