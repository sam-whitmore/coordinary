import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import CharityAdminRegistersNav from './charity-admin-registers/CharityAdminRegistersNav'
import CharityAdminRegister from './charity-admin-registers/CharityAdminRegister'
import useRegisterItems from '../../hooks/useRegisterItems'

export default function CharityAdminRegisters() {
  const { charitySlug } = useParams()
  const [selectedRegister, setSelectedRegister] = useState(1)
  const {
    data: charity,
    isPending,
    isError,
    error,
  } = useCharities().get(charitySlug ?? 'coordinary')
  const hooks = useRegisterItems()
  const onRegisterSelected = (registerId: number) => {
    // console.log('changed target register')
    // console.log(selectedRegister)
    setSelectedRegister(registerId)
    // console.log(selectedRegister)
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

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div className="border-box h-full w-5/6 border-4 border-green-400">
      <CharityAdminRegistersNav {...{ ...charity, onRegisterSelected }} />
      <CharityAdminRegister {...{ id: selectedRegister }} />
      <button onClick={handleClick}>Add Dummy Item</button>
    </div>
  )
}
