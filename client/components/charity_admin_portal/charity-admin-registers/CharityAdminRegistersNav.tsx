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
    <div className="border-box flex h-[8%] w-full border-4 border-purple-500">
      {Object.values(registers).map((register) => {
        return (
          <Link
            to={`${register.registerId}`}
            className={`mx-2 rounded-2xl ${register.registerId == Number(registerid) ? 'border-black' : 'border-accent'} border-2  px-2 align-baseline text-text hover:bg-accent`}
            key={register.registerId}
          >
            <div className="text-center align-baseline">{register.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
