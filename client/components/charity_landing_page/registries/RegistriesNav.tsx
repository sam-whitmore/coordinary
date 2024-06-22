import { Register } from "../../../../models/register"

export default function RegistriesNav(registers: Register[]) {

  console.log(registers)

  return (
    <div className="w-full h-[10%] flex font-medium text-primary justify-center">
      {Object.values(registers).map((register) => { return <p key={register.id} className="mx-8 my-auto p-4 shadow-md bg-teal-100">{register.name}</p>})}
    </div>
  )
}