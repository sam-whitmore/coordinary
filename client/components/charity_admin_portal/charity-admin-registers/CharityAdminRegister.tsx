import useRegisterItems from "../../../hooks/useRegisterItems"

interface Props {
  id: number
}

export default function CharityAdminRegister(register: Props) {

  const { data: items, isPending, isError, error } = useRegisterItems().byRegisterId(register.id)

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
      {items.map((item) => { return <p key={item.items_id}>{item.name}</p>})}
    </div>
  )
}
