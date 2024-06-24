import useRegisters from '../../hooks/useRegisters'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import RegistriesNav from './registries/RegistriesNav'
import Registry from './registries/Registry'
import useCharities from '../../hooks/useCharities'

export default function Registries() {
  const { charitySlug } = useParams()
  const { data: charity } = useCharities().get(charitySlug as string)
  const {
    data: registers,
    isPending,
    isError,
    error,
  } = useRegisters().allOfCharity(charitySlug as string)
  const nav = useNavigate()

  useEffect(() => {
    if (!!charity && !!charity.defaultRegisterId) {
      nav(`${charity.defaultRegisterId}`)
    }
  }, [charity, nav])

  if (!registers) return <p>Error: no registers found</p>

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="relative h-full w-5/6 overflow-y-scroll">
      <div className="fixed h-1/2 w-full overflow-x-hidden bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover"></div>
      <div className="fixed h-1/2 w-full bg-gradient-to-b from-transparent from-80% to-background"></div>
      <div className="absolute left-0 top-[45%] mx-[5%] h-full w-[90%] rounded-2xl bg-background p-4 shadow-lg">
        <RegistriesNav {...registers} />
        <Registry />
      </div>
    </div>
  )
}
