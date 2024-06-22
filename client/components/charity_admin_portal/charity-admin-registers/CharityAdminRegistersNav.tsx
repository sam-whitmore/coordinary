import useRegisters from '../../../hooks/useRegisters'
import { Charity } from '../../../../models/charity'

interface Props extends Charity {
  onRegisterSelected: (_: number) => void
}

export default function CharityAdminRegistersNav(props: Props) {
  const {
    data: registers,
    isPending,
    isError,
    error,
  } = useRegisters().allOfCharity(props.id)

  const handleClick = (id: number) => {
    props.onRegisterSelected(id)
  }

  if (isPending) {
    ;<div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no registers found</p>

  return (
    <div className="border-box flex h-[10%] w-full border-4 border-purple-500">
      {Object.values(registers).map((register) => {
        return (
          <button
            key={register.id}
            className="mx-4"
            onClick={() => handleClick(register.id)}
          >
            {register.name}
          </button>
        )
      })}
    </div>
  )
}
