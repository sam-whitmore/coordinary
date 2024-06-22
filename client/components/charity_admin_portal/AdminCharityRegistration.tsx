import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import useCharities from '../../hooks/useCharities'
import { CharityData } from '../../../models/charity'
import CharityFormField from './AdminCharityForm'

const CharityForm = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate() // Import and initialize the useNavigate hook
  const { add } = useCharities()
  const addCharity = add()
  const [formData, setFormData] = useState<CharityData>({
    name: '',
    categoryId: 0,
    phone: '',
    email: '',
    location: '',
    slug: '',
    defaultRegisterId: 0,
  })
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user || !user.sub) {
      console.error('User is not authenticated')
      return
    }

    const token = await getAccessTokenSilently()

    const newCharity: CharityData = {
      ...formData,
      categoryId: Number(formData.categoryId),
      defaultRegisterId: Number(formData.defaultRegisterId),
    }

    addCharity.mutate(
      { token, data: newCharity },
      {
        onSuccess: () => {
          setIsSuccess(true)
          setError('')
          navigate(`/${formData.slug}/admin`) // Redirect to the desired URL
        },
        onError: (error) => {
          console.error('Error adding charity:', error)
          setError('Failed to add charity. Please try again.')
        },
      },
    )
  }

  return (
    <>
      <div>
        <div className="rounded bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit}>
            <CharityFormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mx-5"
            />
            <CharityFormField
              label="Category ID"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              type="number"
              className="mx-5"
            />
            <CharityFormField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mx-5"
            />
            <CharityFormField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mx-5"
            />
            <CharityFormField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mx-5"
            />
            <CharityFormField
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="mx-5"
            />
            <CharityFormField
              label="Default Register ID"
              name="defaultRegisterId"
              value={formData.defaultRegisterId}
              onChange={handleChange}
              type="number"
              className="mx-5"
            />
            {error && <p className="text-red-500">{error}</p>}
            {isSuccess ? (
              <p className="text-green-500">Charity added successfully!</p>
            ) : (
              <div className="mx-5 mt-4 flex items-center">
                <div className="w-1/4 pr-4 text-right"></div>
                <button
                  className="flex-1 rounded bg-blue-500 px-4 py-2 text-white"
                  type="submit"
                >
                  Add Charity
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default CharityForm
