import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import useCharities from '../../../hooks/useCharities'
import { CharityData } from '../../../../models/charity'
import { CharityInfo } from '../../../../models/charityInfo'
import BasicCharityForm from './BasicDetailsRegistration'
import ExpandedCharityForm from './ExpandedDetailsRegistration'

const CharityForm = () => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const { add } = useCharities()
  const addCharity = add()
  const [step, setStep] = useState(1)
  const [basicFormData, setBasicFormData] = useState<CharityData>({
    name: '',
    categoryId: 0,
    phone: '',
    email: '',
    location: '',
    slug: '',
    defaultRegisterId: 0,
  })
  const [expandedFormData, setExpandedFormData] = useState<CharityInfo>({
    charityId: 0,
    slug: '',
    physicalAddress: '',
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
  const [isSuccess, setIsSuccess] = useState(false)

  const handleBasicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasicFormData({
      ...basicFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleExpandedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpandedFormData({
      ...expandedFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNext = () => {
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user || !user.sub) {
      console.error('User is not authenticated')
      return
    }

    const newCharity: CharityData & CharityInfo = {
      ...basicFormData,
      ...expandedFormData,
      categoryId: Number(basicFormData.categoryId),
      defaultRegisterId: Number(basicFormData.defaultRegisterId),
    }

    addCharity.mutate(
      { slug: basicFormData.slug, info: newCharity },
      {
        onSuccess: () => {
          setIsSuccess(true)
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
      {step === 1 ? (
        <BasicCharityForm
          formData={basicFormData}
          handleChange={handleBasicChange}
          handleNext={handleNext}
          error={error}
        />
      ) : (
        <ExpandedCharityForm
          formData={expandedFormData}
          handleChange={handleExpandedChange}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          error={error}
          isSuccess={isSuccess}
        />
      )}
    </>
  )
}

export default CharityForm