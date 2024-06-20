import { Register } from "../../../../models/register"

export default function RegistriesNav(registers: Register[]) {

  console.log(registers)

  return (
    <div className="w-full h-[10%] border-box border-4 border-purple-500 flex">
      {Object.values(registers).map((register) => { return <p key={register.id} className="mx-4">{register.name}</p>})}
    </div>
  )
}