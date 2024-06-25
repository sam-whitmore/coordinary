import { CharityData } from '../../../../models/charity'
import CharityFormField from './AdminCharityFormField'

interface Props {
  formData: CharityData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNext: () => void
  error: string
}

const BasicCharityForm: React.FC<Props> = ({
  formData,
  handleChange,
  handleNext,
  error,
}) => {
  return (
    <div className="relative mx-auto my-8 flex w-full max-w-2xl flex-col rounded-md bg-white p-8 shadow-md">
      <h2 className="mb-4 font-display text-3xl font-medium capitalize text-primary">
        Basic Details
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleNext()
        }}
      >
        <div className="ml-4 space-y-4">
          <CharityFormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Category ID"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            type="number"
            className="w-full"
          />
          <CharityFormField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full"
          />
          <CharityFormField
            label="Slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        <div className="mt-6 flex justify-end">
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

export default BasicCharityForm
