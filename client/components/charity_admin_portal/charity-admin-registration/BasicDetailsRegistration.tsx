import { CharityData } from '../../../../models/charity'
import CharityFormField from './AdminCharityForm'

interface BasicCharityFormProps {
  formData: CharityData
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNext: () => void
  error: string
}

const BasicCharityForm: React.FC<BasicCharityFormProps> = ({
  formData,
  handleChange,
  handleNext,
  error,
}) => {
  return (
    <div className="rounded bg-white p-6 shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleNext()
        }}
      >
        <CharityFormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Category ID"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          type="number"
          className="mx-5"
        />
        <CharityFormField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="mx-5"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="mx-5 mt-4 flex items-center">
          <div className="w-1/4 pr-4 text-right"></div>
          <button
            className="flex-1 rounded bg-blue-500 px-4 py-2 text-white"
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
