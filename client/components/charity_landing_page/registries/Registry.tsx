import { useParams } from 'react-router-dom'
import useRegisterItems from '../../../hooks/useRegisterItems'
import ItemCard from './registry/ItemCard'
import Spinner from '../../Spinner'

export default function Registry() {
  const { registerid } = useParams()
  const {
    data: items,
    isPending,
    isError,
    error,
  } = useRegisterItems().byRegisterId(Number(registerid))

  if (isPending) return <Spinner />
  if (isError) return <div>{error.message}</div>
  if (!items) return <div>{'No items found'}</div>

  return (
    <div className="h-3/4 w-full">
      <h1 className="font-display text-2xl font-medium text-primary">
        Registry
      </h1>
      <div className="mt-4 grid h-full grid-cols-4 gap-4">
        {items.map((item) => {
          return <ItemCard key={item.items_id} {...item} />
        })}
      </div>
    </div>
  )
}
