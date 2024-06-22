import useRegisters from "../../hooks/useRegisters"
import { useParams } from "react-router-dom"

import RegistriesNav from "./registries/RegistriesNav"
import Registry from "./registries/Registry"

export default function Registries() {
  const { charitySlug } = useParams() 
  const { data: registers, isPending, isError, error } = useRegisters().allOfCharity(charitySlug as string)

  if (!registers) return <p>Error: no registers found</p>

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
    <div className="relative h-full w-[90%] overflow-y-scroll">
      <div className="h-auto w-auto rounded-2xl p-6">
        <h1 className="mb-4 text-6xl font-medium font-display text-secondary capitalize">Our <span className="text-primary font-semibold">Registries</span></h1>
        <RegistriesNav {...registers} />
        <Registry />
      </div>
    </div>
  )
}