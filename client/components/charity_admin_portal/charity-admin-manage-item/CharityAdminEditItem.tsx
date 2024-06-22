import { useParams } from 'react-router-dom'
import CharityAdminItemForm from './CharityAdminItemForm'
import useItems from '../../../hooks/useItems'

export default function CharityAdminEditItem() {
  const { id } = useParams()

  const { data, isPending, isError } = useItems(Number(id)).useGetItemById

  const handleSubmit = () => {}

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <div>
      <CharityAdminItemForm {...{ ...data, onSubmit: handleSubmit }} />
    </div>
  )
}
