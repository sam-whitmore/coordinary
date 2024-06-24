import { useParams } from 'react-router-dom'
import CharityAdminItemForm from './CharityAdminItemForm'
import useItems from '../../../hooks/useItems'
import { ItemData } from '../../../../models/item'
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from '../../Spinner'

export default function CharityAdminEditItem() {
  const { itemid } = useParams()
  const { getAccessTokenSilently } = useAuth0()
  const { useEditItem, useGetItemById, useUploadImage } = useItems(
    Number(itemid),
  )
  const { data, isLoading, isError } = useGetItemById

  const handleSubmit = async (item: ItemData, id?: number) => {
    if (id) {
      const token = await getAccessTokenSilently()
      await useEditItem.mutateAsync({ token, item, id })
    }
  }

  const handleUpload = async (image: File) => {
    const token = await getAccessTokenSilently()

    return await useUploadImage.mutateAsync({ token, image })
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError || !data?.name) {
    return <p>Something went wrong!</p>
  }

  return (
    <div>
      <CharityAdminItemForm
        {...{
          ...data,
          onSubmit: handleSubmit,
          onRequestImageUpload: handleUpload,
        }}
      />
    </div>
  )
}
