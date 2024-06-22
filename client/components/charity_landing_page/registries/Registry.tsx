import useRegisterItems from '../../../hooks/useRegisterItems'
import ItemCard from './registry/ItemCard'

export default function Registry() {
  const {
    data: items,
    isPending,
    isError,
    error,
  } = useRegisterItems().byRegisterId(1)

  if (isPending) console.log('awaiting item data...')
  if (isError) return <div>{error.message}</div>
  if (!items) return <div>{'No items found'}</div>

  console.log(items)

  return (
    <div className="h-full w-full">
      <h1 className="font-display text-2xl font-medium text-primary">
        Registry
      </h1>
      <div className="mt-4 grid h-3/4 grid-cols-4 gap-4">
        {items.map((item) => {
          return <ItemCard key={item.items_id} {...item} />
        })}
      </div>
    </div>
  )
}
