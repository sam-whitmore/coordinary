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

  const { del } = useRegisterItems()

  const handleDelete = async (id: number) => {
    del.mutateAsync(id)
  }

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>
  if (!items || items.length < 1 || !(items instanceof Array))
    return (
      <div>
        <div>{'No items found'}</div>{' '}
        <Link to={`/items/add-to-register/${register.id}`}>Add Item</Link>
      </div>
    )

  return (
    <div>
      <div className="border-box h-[90%] w-full border-4 border-pink-400">
        {items.map((item) => {
          return (
            <div key={item.items_id}>
              <p>{item.name}</p>
              <Link to={`../../items/edit/${item.items_id}`}>Edit Item</Link>
              <button onClick={() => handleDelete(item.items_id)}>
                Delete
              </button>
            </div>
          )
        })}
      </div>
      <Link to={`/items/add-to-register/${register.id}`}>Add Item</Link>
    </div>
  )
}
