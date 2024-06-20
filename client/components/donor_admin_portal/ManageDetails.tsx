import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  email: string
  onSubmit: (_) => void
}

export default function DonorDetails(props: Props) {
  const [formState, setFormState] = useState({ email: props.email })
  const [edited, setEdited] = useState(false)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormState(() => ({ email: evt.target.value }))
    setEdited(() => true)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    props.onSubmit(formState)
    setEdited(() => false)
  }

  return (
    <>
      <div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-lg">
              Email Address
            </label>
            <input
              className="mx-5"
              type="text"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <button className={`${edited ? '' : 'hidden'}`}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
