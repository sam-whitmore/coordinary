import { Register } from '../../../../models/register'

export default function RegistriesNav(registers: Register[]) {
  console.log(registers)

  return (
    <div className="border-box flex h-[10%] w-full border-4 border-purple-500">
      {Object.values(registers).map((register) => {
        return (
          <p key={register.id} className="mx-4">
            {register.name}
          </p>
        )
      })}
    </div>
  )
}
