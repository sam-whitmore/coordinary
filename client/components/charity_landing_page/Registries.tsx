import useRegisters from "../../hooks/useRegisters"

import RegistriesNav from "./registries/RegistriesNav"
import Registry from "./registries/Registry"

export default function Registries() {

  const { data: registers, isPending, isError, error } = useRegisters().allOfCharity(2)

  if (isPending) {
    ;<div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no regsiters found</p>

  console.log(registers)

  return (
    <div className="w-5/6 h-full">
      <RegistriesNav {...registers} />
      <Registry />
    </div>
  )
}