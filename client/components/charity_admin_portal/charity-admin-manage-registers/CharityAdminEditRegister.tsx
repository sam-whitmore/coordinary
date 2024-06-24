import { useNavigate, useParams } from 'react-router-dom'
import { RegisterData } from '../../../../models/register'
import useRegisters from '../../../hooks/useRegisters'
import CharityAdminRegisterForm from './CharityAdminRegisterForm'

export default function CharityAdminEditRegister() {
  const { registerid } = useParams()

  const {
    data: register,
    isLoading,
    isError,
  } = useRegisters().single(Number(registerid))
  const nav = useNavigate()

  const { edit } = useRegisters()

  const handleEdit = async (data: RegisterData, id?: number) => {
    if (id) {
      await edit.mutateAsync({ id, data })
      nav('../manageregisters')
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !register?.name) {
    return <p>Something went wrong!</p>
  }

  return (
    <div className="w-full">
      <CharityAdminRegisterForm {...{ ...register, onSubmit: handleEdit }} />
    </div>
  )
}
