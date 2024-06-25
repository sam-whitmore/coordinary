import { RegisterData } from '../../../../models/register'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props extends Omit<RegisterData, 'notes'> {
  id?: number
  onSubmit: (a: Omit<RegisterData, 'notes'>, b?: number) => void
}

export default function CharityAdminRegisterForm(props: Props) {
  const [formState, setFormState] = useState({
    id: props.id,
    name: props.name,
    active: props.active,
    description: props.description,
    charityId: props.charityId,
  })
  const [ticked, setTicked] = useState(props.active)

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    props.onSubmit({ ...formState, active: ticked }, formState.id)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    if (name === 'active') {
      setTicked((prev) => !prev)
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="bg-lightbackground mx-auto mt-[25px] flex w-2/3 flex-wrap rounded-2xl border p-[5px] py-[50px] shadow-xl">
      <form onSubmit={handleSubmit} className="mt-[10px] w-full space-y-5">
        <div className="mx-auto w-3/4">
          <label htmlFor="name" className="block">
            Register Name
          </label>
          <input
            className=" w-full shadow-md"
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mx-auto w-3/4">
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            className=" w-full shadow-md"
            type="text"
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mx-auto w-3/4">
          <label htmlFor="active" className="block">
            Active
          </label>
          <input
            className="mx-auto shadow-md"
            type="checkbox"
            id="active"
            name="active"
            checked={ticked}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-wrap">
          <button className="mx-auto rounded border border-transparent bg-blue-500 object-center px-4 py-2 text-white shadow-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
