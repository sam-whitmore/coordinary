import { useNavigate, useParams } from 'react-router-dom'
import { RegisterData } from '../../../../models/register'
import useRegisters from '../../../hooks/useRegisters'
import CharityAdminRegisterForm from './CharityAdminRegisterForm'
import useCharities from '../../../hooks/useCharities'
import Spinner from '../../Spinner'

export default function CharityAdminAddRegister() {
  const { charitySlug } = useParams()

  const {
    data: charity,
    isLoading,
    isError,
  } = useCharities().get(charitySlug as string)

  const nav = useNavigate()

  const { add } = useRegisters()

  const handleAdd = async (data: Omit<RegisterData, 'notes'>, id?: number) => {
    await add.mutateAsync(data)
    nav('../manageregisters')
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError || !charity) {
    return <p>Something went wrong!</p>
  }

  return (
    <div className="w-full">
      <CharityAdminRegisterForm
        {...{
          ...{
            charityId: charity.id,
            name: 'New Register',
            description: '',
            active: true,
          },
          onSubmit: handleAdd,
        }}
      />
    </div>
  )
}
