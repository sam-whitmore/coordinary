import { useState } from "react"
import { useParams } from "react-router-dom"
import useCharities from "../../hooks/useCharities"
import CharityAdminRegistersNav from "./charity-admin-registers/CharityAdminRegistersNav"
import CharityAdminRegister from "./charity-admin-registers/CharityAdminRegister"

export default function CharityAdminRegisters() {

  const { charitySlug } = useParams()
  const [selectedRegister, setSelectedRegister] = useState(1)
  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug ?? "coordinary")

  const onRegisterSelected = (registerId:number) => {
    // console.log('changed target register')
    // console.log(selectedRegister)
    setSelectedRegister(registerId)
    // console.log(selectedRegister)
  }

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div className="w-5/6 h-full border-box border-4 border-green-400">
      <CharityAdminRegistersNav {...{...charity, onRegisterSelected}} />
      <CharityAdminRegister {...{id:selectedRegister}}/>
    </div>
  )
}