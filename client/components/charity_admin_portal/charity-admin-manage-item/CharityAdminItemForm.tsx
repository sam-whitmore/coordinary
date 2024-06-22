import { FormEvent, useState } from 'react'
import { ItemData } from '../../../../models/item'
import { ChangeEvent } from 'react'

interface Props extends ItemData {
  id?: number
  onSubmit: (a: ItemData, b?: number) => void
  onRequestImageUpload: (b: File) => Promise<{ image: string }>
}

export default function CharityAdminItemForm(props: Props) {
  const [formState, setFormState] = useState({
    id: props.id,
    name: props.name,
    image: props.image,
    used: props.used,
    priceInNZD: props.priceInNZD,
    NZDRaised: props.NZDRaised,
    notes: props.notes ?? '',
  })
  const [image, setImage] = useState<File | string>(`/uploads/${props.image}`)
  const [ticked, setTicked] = useState(props.used)

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()
    if (typeof image !== 'string') {
      const res = await props.onRequestImageUpload(image)
      setFormState((prev) => ({ ...prev, image: res.image }))
      props.onSubmit(
        { ...formState, image: res.image, used: ticked },
        formState.id,
      )
    } else {
      props.onSubmit({ ...formState, used: ticked }, formState.id)
    }
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    if (name === 'used') {
      setTicked((prev) => !prev)
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRemoveImage = () => {
    if (typeof image === 'string') {
      URL.revokeObjectURL(image)
    }
    setFormState((prev) => ({ ...prev, image: undefined }))
  }

  const handleImageChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target?.files && evt.target.files[0]) {
      if (typeof image === 'string') {
        URL.revokeObjectURL(image)
      }
      setImage(() => evt.target.files[0])
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {image && (
          <div>
            <img
              alt="not found"
              width={'250px'}
              src={
                typeof image === 'string' ? image : URL.createObjectURL(image)
              }
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
          checked={ticked}
          onChange={handleChange}
        ></input>
        <label htmlFor="priceInNZD">{`Target (NZD$)`}</label>
        <input
          name="priceInNZD"
          id="priceInNZD"
          type="number"
          onChange={handleChange}
          value={formState.priceInNZD}
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
