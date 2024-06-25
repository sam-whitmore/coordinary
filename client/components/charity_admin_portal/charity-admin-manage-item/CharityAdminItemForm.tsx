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
    description: props.description,
    creatorCharitySlug: props.creatorCharitySlug,
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

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = evt.target
    if (name === 'used') {
      setTicked((prev) => !prev)
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRemoveImage = () => {
    console.log('removed clicked')
    if (typeof image === 'string') {
      console.log('revoked')
      URL.revokeObjectURL(image)
    }
    setFormState((prev) => ({ ...prev, image: undefined }))
    setImage(() => '/uploads/undefined')
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
    <div className="bg-lightbackground mx-auto flex w-2/3 flex-wrap rounded-2xl border p-[5px] pb-[25px] shadow-xl">
      <form onSubmit={handleSubmit} className="mt-[10px] w-full space-y-5">
        <div className="ml-auto flex flex-wrap">
          {image !== '/uploads/undefined' && image !== '/uploads/null' && (
            <div className="mx-auto">
              <img
                alt="not found"
                width={'250px'}
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
              />
              <button
                type="button"
                className="mx-auto w-full rounded border border-transparent bg-blue-500 px-2 py-2 text-white shadow-xl hover:bg-blue-700"
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap">
          <label className="mx-auto cursor-pointer rounded border border-transparent bg-blue-500 px-4 py-2 text-white shadow-xl hover:bg-blue-700">
            <input
              className="mx-auto hidden "
              type="file"
              name="image"
              onChange={handleImageChange}
            ></input>
            Upload Image
          </label>
        </div>
        <div className="mx-auto flex w-3/4 flex-wrap justify-between">
          <div>
            <label htmlFor="name" className="block">
              Item Name
            </label>
            <input
              className="mx-auto shadow-md"
              name="name"
              id="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="used" className="block">
              Used?
            </label>
            <input
              className="mx-auto"
              name="used"
              id="used"
              type="checkbox"
              checked={ticked}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label
              htmlFor="priceInNZD"
              className="block"
            >{`Target (NZD$)`}</label>
            <input
              className="mx-auto shadow-md"
              name="priceInNZD"
              id="priceInNZD"
              type="number"
              onChange={handleChange}
              value={formState.priceInNZD}
            ></input>
          </div>
        </div>
        <div className="mx-auto w-3/4">
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            className=" w-full shadow-md"
            name="description"
            id="description"
            value={formState.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mx-auto w-3/4">
          <label htmlFor="notes" className="block">
            Notes (private)
          </label>
          <input
            className=" w-full shadow-md"
            name="notes"
            id="notes"
            type="textarea"
            value={formState.notes}
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
