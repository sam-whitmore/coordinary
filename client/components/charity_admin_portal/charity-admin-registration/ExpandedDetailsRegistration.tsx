import React from 'react'
import { CharityInfo } from '../../../../models/charityInfo'
import CharityFormField from './AdminCharityForm'

interface Props {
  formData: CharityInfo
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBack: () => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: string
  isSuccess: boolean
}

const ExpandedCharityForm: React.FC<Props> = ({
  formData,
  handleChange,
  handleBack,
  handleSubmit,
  error,
  isSuccess,
}) => {
  return (
    <div className="rounded bg-white p-6 shadow-md">
      <form onSubmit={handleSubmit}>
        <CharityFormField
          label="Physical Address"
          name="physicalAddress"
          value={formData.physicalAddress}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Postal Address"
          name="postalAddress"
          value={formData.postalAddress}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Opening Hours"
          name="openingHours"
          value={formData.openingHours}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Vision"
          name="vision"
          value={formData.vision}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Mission"
          name="mission"
          value={formData.mission}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Values"
          name="values"
          value={formData.values}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Services"
          name="services"
          value={formData.services}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Story"
          name="story"
          value={formData.story}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Emphatic"
          name="emphatic"
          value={formData.emphatic}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="CTA Statement"
          name="ctaStatement"
          value={formData.ctaStatement}
          onChange={handleChange}
          className="mx-5"
        />
        <CharityFormField
          label="Stakeholders"
          name="stakeholders"
          value={formData.stakeholders}
          onChange={handleChange}
          className="mx-5"
        />
        {error && <p className="text-red-500">{error}</p>}
        {isSuccess ? (
          <p className="text-green-500">Charity added successfully!</p>
        ) : (
          <div className="mx-5 mt-4 flex items-center">
            <button
              className="flex-1 rounded bg-gray-500 px-4 py-2 text-white"
              type="button"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="ml-4 flex-1 rounded bg-blue-500 px-4 py-2 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default ExpandedCharityForm
