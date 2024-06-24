import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { CharityData } from '../../../../models/charity'
import { CharityInfo } from '../../../../models/charityInfo'
import BasicCharityForm from './BasicDetailsRegistration'
import BusinessOperationsForm from './BusinessOperationsForm'
import VisionForm from './VisionForm'
import StoryForm from './StoryForm'
import useCharitiesInfo from '../../../hooks/useCharitiesInformation'
import PreviewForm from './RegistrationPreview'
import useCharities from '../../../hooks/useCharities'
import ProgressBar from '../../../utility/ProgressBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const totalSteps = 5

const CharityForm = () => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const { add: addCharity } = useCharitiesInfo()
  const { getAccessTokenSilently } = useAuth0()
  const { add } = useCharities()
  const [step, setStep] = useState(1)
  const [basicFormData, setBasicFormData] = useState<CharityData>({
    name: '',
    categoryId: 0,
    phone: '',
    email: '',
    location: '',
    defaultRegisterId: 0,
    slug: '',
  })
  const [expandedFormData, setExpandedFormData] = useState<CharityInfo>({
    charityId: 0,
    slug: '',
    physicalAddress: '',
    name: '',
    postalAddress: '',
    openingHours: '',
    phone: '',
    email: '',
    vision: '',
    mission: '',
    values: '',
    services: '',
    story: '',
    emphatic: '',
    ctaStatement: '',
    stakeholders: '',
  })
  const [error, setError] = useState('')

  const handleBasicChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setBasicFormData({
      ...basicFormData,
      [e.target.name]: e.target.value,
    })
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user || !user.sub) {
      console.error('User is not authenticated')
      return
    }

    const newCharity: CharityData & CharityInfo = {
      ...basicFormData,
      ...expandedFormData,
      slug: basicFormData.slug,
      categoryId: Number(basicFormData.categoryId),
      defaultRegisterId: Number(basicFormData.defaultRegisterId),
    }
    const token = await getAccessTokenSilently()

    await add.mutateAsync({ token, data: basicFormData })
    await addCharity.mutateAsync(
      { slug: basicFormData.slug, info: newCharity },
      {
        onSuccess: () => {
          setError('')
          navigate(`/${basicFormData.slug}/admin`)
        },
        onError: (error) => {
          console.error('Error adding charity:', error)
          setError('Failed to add charity. Please try again.')
        },
      },
    )
  }

  return (
    <>
      <TransitionGroup className="transition-container">
        <CSSTransition key={step} timeout={600} classNames="form">
          <div className="transition-item">
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
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default CharityForm
