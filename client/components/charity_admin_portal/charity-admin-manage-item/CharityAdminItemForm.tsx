import { FormEvent, useState } from 'react'
import { ItemData } from '../../../../models/item'
import { ChangeEvent } from 'react'

interface Props extends ItemData {
  id?: number
  onSubmit: (_) => void
}

export default function CharityAdminItemForm(props: Props) {
  const [formState, setFormState] = useState({
    name: props.name ?? '',
    // image: props.image,
    used: props.used ?? false,
    priceInNZD: props.priceInNZD ?? 0,
    NZDRaised: props.NZDRaised ?? 0,
    notes: props.notes ?? '',
  })
  const [image, setImage] = useState(props.image)

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    props.onSubmit(formState)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRemoveImage = () => {
    // setFormState((prev) => ({ ...prev, image: undefined }))
    URL.revokeObjectURL(image)
    setImage(() => undefined)
  }

  const handleImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // setFormState((prev) => ({
    //   ...prev,
    //   image: evt.target.files ? evt.target.files[0] : undefined,
    // }))
    URL.revokeObjectURL(image)
    setImage(evt.target.files[0])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {image && (
          <div>
            <img
              alt="not found"
              width={'250px'}
              src={URL.createObjectURL(image)}
            />
            <button onClick={handleRemoveImage}>Remove Image</button>
          </div>
        )}
        <label htmlFor="image">Upload an Image</label>
        <input type="file" name="image" onChange={handleImageChange}></input>
        <label htmlFor="name">Item Name</label>
        <input
          name="name"
          id="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="used">Used?</label>
        <input
          name="used"
          id="used"
          type="checkbox"
          checked={formState.used}
          onChange={handleChange}
        ></input>
        <label htmlFor="priceInNZD">{`Target (NZD$)`}</label>
        <input
          name="priceInNZD"
          id="nzd-price"
          type="number"
          onChange={handleChange}
        ></input>
        <label htmlFor="notes">Notes</label>
        <input
          name="notes"
          id="notes"
          type="text"
          value={formState.notes}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
