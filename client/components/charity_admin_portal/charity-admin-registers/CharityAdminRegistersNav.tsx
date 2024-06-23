import useRegisters from '../../../hooks/useRegisters'
import { Charity } from '../../../../models/charity'
import { Link, useParams } from 'react-router-dom'

interface Props extends Charity {}

export default function CharityAdminRegistersNav(props: Props) {
  const {
    data: registers,
    isPending,
    isError,
    error,
  } = useRegisters().allOfCharity(props.slug)

  const { registerid } = useParams()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no registers found</p>

  return (
    <div className="flex h-[8%] w-full justify-center font-medium text-primary">
      {Object.values(registers).map((register) => {
        return (
          <Link
            to={`${register.registerId}`}
            className={`mx-8 my-auto bg-teal-100 p-4 shadow-md ${register.registerId == Number(registerid) ? 'border-primary' : 'border-teal-100'} border-2  px-2 align-baseline text-text hover:border-primary hover:bg-primary`}
            key={register.registerId}
          >
            <div className="text-center align-baseline">{register.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
