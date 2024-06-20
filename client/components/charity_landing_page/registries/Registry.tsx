import useRegisterItems from "../../../hooks/useRegisterItems"
import ItemCard from "./registry/ItemCard"

export default function Registry() {

  const { data: items, isPending, isError, error } = useRegisterItems().byRegisterId(3)

  if (isPending) console.log('awaiting item data...')
  if (isError) return (
    <div>{error.message}</div>
  )
  if (!items) return (
    <div>{'No items found'}</div>
  )

  console.log(items)
  
  return (
    <div className="border-box h-[90%] w-full border-4 border-pink-400">
      <h1>Registry</h1>
      <p>
        This component contains the currently selected gift; donation register.
      </p>
      {items.map((item) => { return <ItemCard key={item.items_id} {...item} />})}
    </div>
  )
}
