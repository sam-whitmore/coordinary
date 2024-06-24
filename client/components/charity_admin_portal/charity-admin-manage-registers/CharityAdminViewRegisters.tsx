import useRegisters from '../../../hooks/useRegisters'
import CharityAdminRegisterCard from './CharityAdminRegisterCard'
import { RegisterData } from '../../../../models/register'
import CharityAdminAddRegisterCard from './CharityAdminAddRegisterCard'
import useCharities from '../../../hooks/useCharities'
import { useAuth0 } from '@auth0/auth0-react'

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
  const { data: charity } = useCharities().get(props.slug)
  const { getAccessTokenSilently } = useAuth0()
  const { edit } = useRegisters()
  const { edit: editCharity } = useCharities()

  const handleRemove = async (data: RegisterData, id: number) => {
    data.active = false
    await edit.mutateAsync({ id, data })
  }

  const handleFavouriteRegistry = async (id: number) => {
    if (charity && registers) {
      const token = await getAccessTokenSilently()
      charity.defaultRegisterId = id
      //purely to avoid having to invalidate a different query but still give feedback to user (hacky):
      registers.forEach((x) => (x.charityDefaultId = id))
      // if (changed) changed.charityDefaultId = id
      await editCharity.mutateAsync({ token, id: charity.id, data: charity })
    }
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="h-full w-full">
      {registers && registers.length > 0 ? (
        <div className="mx-4 mt-4 grid h-3/4 grid-cols-4 flex-col gap-4">
          {registers.map((register) => (
            <CharityAdminRegisterCard
              key={register.registerId}
              {...{
                ...register,
                requestRemove: handleRemove,
                requestFavourite: handleFavouriteRegistry,
              }}
            />
          ))}
          <CharityAdminAddRegisterCard />
        </div>
      ) : (
        <div className="mx-4 mt-4 grid h-3/4 grid-cols-4 flex-col gap-4">
          <CharityAdminAddRegisterCard />
        </div>
      )}
    </div>
  )
}
