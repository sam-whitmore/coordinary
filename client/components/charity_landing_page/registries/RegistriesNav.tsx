import { RegisterFromSlug } from '../../../../models/register'

export default function RegistriesNav(registers: RegisterFromSlug[]) {
  return (
    <div className="flex h-[10%] w-full justify-center font-medium text-primary">
      {Object.values(registers).map((register) => {
        return (
          <button
            key={register.registerId}
            className="mx-8 my-auto bg-teal-100 p-4 shadow-md"
          >
            {register.name}
          </button>
        )
      })}
    </div>
  )
}
