import { Link, useParams } from 'react-router-dom'
import useRegisterItems from '../../../hooks/useRegisterItems'
import AdminItemCard from '../charity-admin-manage-item/AdminItemCard'
import AdminAddItemCard from '../charity-admin-manage-item/AdminAddItemCard'

export default function CharityAdminRegister() {
  const { registerid } = useParams()
  const {
    data: items,
    isPending,
    isError,
    error,
  } = useRegisterItems().byRegisterId(Number(registerid))

  const { del } = useRegisterItems()

  const handleDelete = async (id: number) => {
    del.mutateAsync(id)
  }

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <div className="h-full w-full">
      {items && items.length > 0 ? (
        <div className="mx-4 mt-4 grid h-3/4 flex-shrink grow grid-cols-4 flex-row gap-4">
          {items.map((item) => (
            <AdminItemCard
              key={item.items_id}
              {...{ ...item, requestDelete: handleDelete }}
            />
          ))}
          <AdminAddItemCard />
        </div>
      ) : (
        <div className="mx-4 mt-4 grid h-3/4 grid-cols-4 gap-4">
          <AdminAddItemCard />
        </div>
      )}
    </div>
  )
}
