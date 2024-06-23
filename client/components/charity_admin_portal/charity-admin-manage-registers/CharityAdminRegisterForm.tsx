import { RegisterData } from '../../../../models/register'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props extends RegisterData {
  id?: number
  onSubmit: (a: RegisterData, b?: number) => void
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Register Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
        ></input>
        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          id="active"
          name="active"
          checked={ticked}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
