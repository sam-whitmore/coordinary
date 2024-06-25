import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { CharityData } from '../../../../models/charity'
import { CharityInfo } from '../../../../models/charityInfo'
import useCharitiesInfo from '../../../hooks/useCharitiesInformation'
import useCharities from '../../../hooks/useCharities'
import AdminCharityForm from './AdminCharityForm'

const CharityForm = () => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const { add: addCharity } = useCharitiesInfo()
  const { getAccessTokenSilently } = useAuth0()
  const { add } = useCharities()

  const onSubmit = async (
    basicFormData: CharityData,
    expandedFormData: CharityInfo,
  ) => {
    if (!user || !user.sub) {
      return 'User is not authenticated'
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
          navigate(`/${basicFormData.slug}/admin`)
        },
        onError: () => {
          return 'Failed to add charity. Please try again.'
        },
      },
    )
  }

  return (
    <AdminCharityForm
      {...{
        basicFormData: {
          name: '',
          categoryId: 0,
          phone: '',
          email: '',
          location: '',
          defaultRegisterId: 0,
          slug: '',
        },
        expandedFormData: {
          name: '',
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
        },
        onSubmit,
      }}
    />
  )
}

export default CharityForm
