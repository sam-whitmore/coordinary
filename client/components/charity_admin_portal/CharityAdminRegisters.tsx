import { useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import CharityAdminRegistersNav from './charity-admin-registers/CharityAdminRegistersNav'

export default function CharityAdminRegisters() {
  const { charitySlug } = useParams()

  const {
    data: charity,
    isError,
    isLoading,
    error,
  } = useCharities().get(charitySlug ?? 'coordinary')
  const nav = useNavigate()

  //this useEffect should run once, after this component is rendered and the charity data exists
  //all it does is navigate to the charity's default register, to ensure a register is selected
  //the user can still manually select no registers, by navigating back to /registers
  useEffect(() => {
    if (!isLoading && !isError && !!charity && !!charity.defaultRegisterId) {
      nav(`${charity.defaultRegisterId}`)
    }
  }, [charity, isError, isLoading, nav])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError || !charity) {
    return <p>{error?.message}</p>
  }

  return (
    <div className="border-box h-full w-5/6 border-4 border-green-400">
      <CharityAdminRegistersNav {...{ ...charity }} />
      <Outlet />
    </div>
  )
}
