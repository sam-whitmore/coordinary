import { useNavigate, useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import useCharitiesInformation from '../../hooks/useCharitiesInformation'
import { useAuth0 } from '@auth0/auth0-react'
import useCharitiesInfo from '../../hooks/useCharitiesInformation'
import Spinner from '../Spinner'
import AdminCharityForm from './charity-admin-registration/AdminCharityForm'
import { CharityData } from '../../../models/charity'
import { CharityInfo } from '../../../models/charityInfo'

export default function AdminDashboard() {
  const { user } = useAuth0()
  const { charitySlug } = useParams()
  const navigate = useNavigate()
  const {
    data: charityInfo,
    isPending,
    isError,
    error,
  } = useCharitiesInformation().info(charitySlug as string)
  const {
    data: charity,
    isPending: charityIsPending,
    isError: charityIsError,
  } = useCharities().get(charitySlug as string)

  const { edit: editCharityInfo } = useCharitiesInfo()
  const { edit } = useCharities()
  const { getAccessTokenSilently } = useAuth0()

  if (isPending || charityIsPending) {
    return <Spinner />
  }
  if (isError || charityIsError) {
    return <div>Something went wrong!</div>
  }

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

    await edit.mutateAsync({ token, data: basicFormData, id: charity.id })
    await editCharityInfo.mutateAsync(
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
    <div className="h-full w-5/6">
      <AdminCharityForm
        {...{
          basicFormData: {
            name: charity.name,
            categoryId: charity.categoryId,
            phone: charity.phone ?? '',
            email: charity.email ?? '',
            location: charity.location ?? '',
            defaultRegisterId: charity.defaultRegisterId,
            slug: charity.slug,
          },
          expandedFormData: {
            name: charity.name,
            charityId: charity.id,
            slug: charity.slug,
            physicalAddress: charityInfo.physicalAddress,
            postalAddress: charityInfo.postalAddress,
            openingHours: charityInfo.openingHours,
            phone: charity.phone ?? '',
            email: charity.email ?? '',
            vision: charityInfo.vision,
            mission: charityInfo.mission,
            values: charityInfo.values,
            services: charityInfo.services,
            story: charityInfo.story,
            emphatic: charityInfo.emphatic,
            ctaStatement: charityInfo.ctaStatement,
            stakeholders: charityInfo.stakeholders,
          },
          onSubmit,
        }}
      />
    </div>
  )
}
