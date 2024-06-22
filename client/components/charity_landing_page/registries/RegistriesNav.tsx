import { RegisterFromSlug } from "../../../../models/register"

export default function RegistriesNav(registers: RegisterFromSlug[]) {

  return (
    <div className="w-full h-[10%] flex font-medium text-primary justify-center">
      {Object.values(registers).map((register) => { return <button key={register.registerId} className="mx-8 my-auto p-4 shadow-md bg-teal-100">{register.registerName}</button>})}
    </div>
  )
}