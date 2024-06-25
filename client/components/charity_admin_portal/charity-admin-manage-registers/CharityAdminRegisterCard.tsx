import { Link } from 'react-router-dom'
import { RegisterData, RegisterFromSlug } from '../../../../models/register'

interface Props extends RegisterFromSlug {
  requestRemove: (data: RegisterData, id: number) => void
  requestFavourite: (id: number) => void
}

export default function CharityAdminRegisterCard(register: Props) {
  return (
    <div
      aria-label="register"
      className="bg-lightbackground relative h-[400px] rounded-2xl border border-secondary text-center shadow-xl transition duration-500 ease-in-out hover:bg-background"
    >
      {register.charityDefaultId === register.registerId && (
        <h1 className="absolute left-1/3 top-[-10px] rounded-l border  border-secondary bg-white text-2xl text-accent">
          Primary
        </h1>
      )}
      <h1 className="mt-5 text-2xl">{register.name}</h1>
      <div className="mx-auto mt-2 h-2/3 w-3/4">
        <div className="mt-4 h-[230px] overflow-y-auto text-justify text-sm ">
          {register.description}
        </div>
      </div>
      <div className="mx-2 mt-4 flex justify-between ">
        <button
          className="rounded border border-transparent bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
          onClick={() => register.requestFavourite(register.registerId)}
        >
          Default
        </button>
        <button
          className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() =>
            register.requestRemove(
              {
                name: register.name,
                charityId: register.charityId,
                description: register.description,
                active: register.active,
                notes: '', //TODO: fix by getting notes data.
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
  )
}
