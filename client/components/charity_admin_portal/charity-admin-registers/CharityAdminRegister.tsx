import { Link } from 'react-router-dom'
import useRegisterItems from '../../../hooks/useRegisterItems'

interface Props {
  id: number
}

export default function CharityAdminRegister(register: Props) {
  const {
    data: items,
    isPending,
    isError,
    error,
  } = useRegisterItems().byRegisterId(register.id)

  if (isPending) console.log('awaiting item data...')
  if (isError) return <div>{error.message}</div>
  if (!items) return <div>{'No items found'}</div>

  return (
    <div className="border-box h-[90%] w-full border-4 border-pink-400">
      {items.map((item) => {
        return (
          <div key={item.items_id}>
            <p>{item.name}</p>
            <Link to={`../../items/${item.items_id}/edit`}>Edit Item</Link>
          </div>
        )
      })}
    </div>
  )
}
