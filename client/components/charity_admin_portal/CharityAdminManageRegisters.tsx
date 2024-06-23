import { useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import CharityAdminViewRegisters from './charity-admin-manage-registers/CharityAdminViewRegisters'

export default function CharityAdminManageRegisters() {
  const { charitySlug } = useParams()

  const {
    data: charity,
    isError,
    isLoading,
    error,
  } = useCharities().get(charitySlug as string)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError || !charity) {
    return <p>{error?.message}</p>
  }

  return (
    <div>
      <CharityAdminViewRegisters {...{ slug: charity.slug }} />
    </div>
  )
}
