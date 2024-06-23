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
    <div className="= flex items-center ">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <label htmlFor="email" className="text-lg font-medium text-secondary">
            Email Address
          </label>
          <input
            className="w-64 rounded-md p-2 text-secondary focus:border-primary focus:ring-primary"
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <button
            className={`${
              edited ? 'inline-block' : 'hidden'
            } hover:bg-primary-dark rounded-md bg-primary px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
