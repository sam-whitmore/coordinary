import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  email: string
  onSubmit: (_) => void
}

export default function DonorDetails(props: Props) {
  const [formState, setFormState] = useState({ email: props.email })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormState(() => ({ email: evt.target.value }))
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    props.onSubmit(formState)
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
          </form>
        </div>
      </div>
    </>
  )
}
