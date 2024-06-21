import useRegisters from '../../hooks/useRegisters'

import RegistriesNav from './registries/RegistriesNav'
import Registry from './registries/Registry'

export default function Registries() {
  const {
    data: registers,
    isPending,
    isError,
    error,
  } = useRegisters().allOfCharity(2)

  if (isPending) {
    ;<div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no regsiters found</p>

  return (
    <div className="border-box h-full w-5/6 border-4 border-sky-400">
      <RegistriesNav {...registers} />
      <Registry />
    </div>
  )
}
