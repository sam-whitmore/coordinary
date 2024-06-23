import { Link, useParams } from 'react-router-dom'
import { RegisterFromSlug } from '../../../../models/register'

export default function RegistriesNav(registers: RegisterFromSlug[]) {
  const { registerid } = useParams()
  return (
    <div className="flex h-[10%] w-full justify-center font-medium text-primary">
      {Object.values(registers).map((register) => {
        return (
          <Link
            to={`${register.registerId}`}
            className={`mx-8 my-auto bg-teal-100 p-4 shadow-md ${register.registerId == Number(registerid) ? 'border-primary' : 'border-teal-100'} border-2  px-2 align-baseline text-text hover:border-primary hover:bg-primary`}
            key={register.registerId}
          >
            <div className="text-center align-baseline">{register.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
