import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import CharityAdminRegistersNav from './charity-admin-registers/CharityAdminRegistersNav'
import CharityAdminRegister from './charity-admin-registers/CharityAdminRegister'
import useRegisterItems from '../../hooks/useRegisterItems'

export default function CharityAdminRegisters() {
  const { charitySlug } = useParams()
  const [selectedRegister, setSelectedRegister] = useState(0)
  const {
    data: charity,
    isPending,
    isError,
    isLoading,
    error,
  } = useCharities().get(charitySlug ?? 'coordinary')
  const hooks = useRegisterItems()
  const onRegisterSelected = (registerId: number) => {
    setSelectedRegister(registerId)
  }

  const handleClick = () => {
    hooks.addToRegister.mutate({
      item: {
        name: 'mattress',
        used: false,
        priceInNZD: 189.99,
        NZDRaised: 100,
      },
      register_id: selectedRegister,
    })
  }
  //this useEffect should run once, after this component is rendered and the charity data exists
  //all it does is set the selectedRegister to be equal to the charity's default register
  useEffect(() => {
    if (!isPending && !isError && !!charity && selectedRegister === 0) {
      setSelectedRegister(charity.defaultRegisterId)
    }
  }, [selectedRegister, charity, isError, isPending])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError || !charity) {
    return <p>{error?.message}</p>
  }

  return (
    <div className="border-box h-full w-5/6 border-4 border-green-400">
      <CharityAdminRegistersNav {...{ ...charity, onRegisterSelected }} />
      <CharityAdminRegister {...{ id: selectedRegister }} />
      <button onClick={handleClick}>Add Dummy Item</button>
    </div>
  )
}
