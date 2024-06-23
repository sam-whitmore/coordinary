import { Link } from 'react-router-dom'
import useRegisters from '../../../hooks/useRegisters'
import CharityAdminRegisterCard from './CharityAdminRegisterCard'
import { RegisterData } from '../../../../models/register'

interface Props {
  slug: string
}

export default function CharityAdminViewRegisters(props: Props) {
  const {
    data: registers,
    isPending,
    isError,
    error,
  } = useRegisters().allOfCharity(props.slug)

  const { edit } = useRegisters()

  const handleRemove = async (data: RegisterData, id: number) => {
    data.active = false
    await edit.mutateAsync({ id, data })
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no registers found</p>
  return (
    <div className="h-full w-full">
      <div className="mt-4 grid h-3/4 grid-cols-4 gap-4">
        {registers.map((register) => (
          <CharityAdminRegisterCard
            key={register.registerId}
            {...{ ...register, requestRemove: handleRemove }}
          />
        ))}
        <Link
          className="place-content-center rounded-2xl border border-black text-center align-middle text-secondary shadow-xl hover:border-secondary hover:bg-secondary hover:text-background"
          to={`add`}
        >
          <div>
            <h1 className="select-none text-center text-3xl">
              Add A New Register
            </h1>
            <div className="align-center mx-auto h-2/3 w-2/3 select-none text-center text-8xl">
              +
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
