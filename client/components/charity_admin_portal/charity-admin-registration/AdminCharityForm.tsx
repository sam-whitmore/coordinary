import { useState } from 'react'
import { CharityData } from '../../../../models/charity'
import { CharityInfo } from '../../../../models/charityInfo'
import BasicCharityForm from './BasicDetailsRegistration'
import BusinessOperationsForm from './BusinessOperationsForm'
import VisionForm from './VisionForm'
import StoryForm from './StoryForm'
import PreviewForm from './RegistrationPreview'
import ProgressBar from '../../../utility/ProgressBar'

const totalSteps = 5
interface Props {
  basicFormData: CharityData
  expandedFormData: CharityInfo
  onSubmit: (
    basicFormData: CharityData,
    expandedFormData: CharityInfo,
  ) => Promise<string | void>
}

export default function AdminCharityForm(props: Props) {
  const [step, setStep] = useState(1)
  const [basicFormData, setBasicFormData] = useState<CharityData>(
    props.basicFormData,
  )
  const [expandedFormData, setExpandedFormData] = useState<CharityInfo>(
    props.expandedFormData,
  )
  const [error, setError] = useState('')
  const handleBasicChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setBasicFormData({
      ...basicFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const possibleError = await props.onSubmit(basicFormData, expandedFormData)

    if (possibleError) {
      setError(possibleError)
    }
  }

  const handleExpandedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setExpandedFormData({
      ...expandedFormData,
      [e.target.name]: e.target.value,
    })
  }
  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <>
      {step === 1 && (
        <BasicCharityForm
          formData={basicFormData}
          handleChange={handleBasicChange}
          handleNext={handleNext}
          error={error}
        />
      )}
      {step === 2 && (
        <BusinessOperationsForm
          formData={expandedFormData}
          handleChange={handleExpandedChange}
          handleBack={handleBack}
          handleNext={handleNext}
          error={error}
        />
      )}
      {step === 3 && (
        <VisionForm
          formData={expandedFormData}
          handleChange={handleExpandedChange}
          handleBack={handleBack}
          handleNext={handleNext}
          error={error}
        />
      )}
      {step === 4 && (
        <StoryForm
          formData={expandedFormData}
          handleChange={handleExpandedChange}
          handleBack={handleBack}
          handleNext={handleNext}
          error={error}
        />
      )}
      {step === 5 && (
        <PreviewForm
          basicFormData={basicFormData}
          expandedFormData={expandedFormData}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      )}
      <ProgressBar step={step} totalSteps={totalSteps} />
    </>
  )
}
