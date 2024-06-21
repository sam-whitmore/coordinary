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
    <div className="border-box h-[90%] w-full border-4 border-pink-400">
      <div className="m-4 grid h-3/6 grid-cols-4 gap-4">
        {items.map((item) => {
          return <ItemCard key={item.items_id} {...item} />
        })}
      </div>
    </div>
  )
}
