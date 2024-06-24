import { useNavigate, useParams } from 'react-router-dom'
import CharityAdminItemForm from './CharityAdminItemForm'
import useItems from '../../../hooks/useItems'
import { ItemData } from '../../../../models/item'
import { useAuth0 } from '@auth0/auth0-react'

export default function CharityAdminAddItem() {
  const { registerid, charitySlug } = useParams()
  const { getAccessTokenSilently } = useAuth0()
  const { useAddItem, useUploadImage } = useItems(Number(registerid))

  const nav = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (item: ItemData, id?: number) => {
    const token = await getAccessTokenSilently()
    await useAddItem.mutateAsync({
      token,
      item,
      registerid: Number(registerid),
    })
    nav(`../${registerid}`)
  }

  const handleUpload = async (image: File) => {
    const token = await getAccessTokenSilently()

    return await useUploadImage.mutateAsync({ token, image })
  }

  return (
    <div>
      <CharityAdminItemForm
        {...{
          ...{
            name: 'New Item',
            image: undefined,
            used: false,
            priceInNZD: 0,
            NZDRaised: 0,
            notes: '',
            creatorCharitySlug: charitySlug as string,
            description: '',
          },
          onSubmit: handleSubmit,
          onRequestImageUpload: handleUpload,
        }}
      />
    </div>
  )
}
