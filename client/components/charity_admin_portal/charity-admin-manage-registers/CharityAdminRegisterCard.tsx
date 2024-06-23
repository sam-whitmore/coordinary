import { Link } from 'react-router-dom'
import { RegisterData, RegisterFromSlug } from '../../../../models/register'

interface Props extends RegisterFromSlug {
  requestRemove: (data: RegisterData, id: number) => void
}

export default function CharityAdminRegisterCard(register: Props) {
  return (
    <div className="rounded-2xl border border-black text-center shadow-xl hover:border-secondary">
      <h1 className="text-2xl">{register.name}</h1>
      <div className="mx-auto mt-2 h-auto w-3/4 ">
        <div className="mt-4 rounded-xl bg-gray-300 text-justify text-sm shadow-xl">
          {register.description}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() =>
              register.requestRemove(
                {
                  name: register.name,
                  charityId: register.charityId,
                  description: register.description,
                  active: register.active,
                },
                register.registerId,
              )
            }
          >
            Remove
          </button>
          <Link
            className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            to={`edit/${register.registerId}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  )
}
