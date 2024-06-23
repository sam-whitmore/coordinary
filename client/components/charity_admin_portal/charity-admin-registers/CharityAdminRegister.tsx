import { Link, useParams } from 'react-router-dom'
import useRegisterItems from '../../../hooks/useRegisterItems'
import AdminItemCard from '../charity-admin-manage-item/AdminItemCard'
import AdminAddItemCard from '../charity-admin-manage-item/AdminAddItemCard'

// interface Props {
//   id: number
// }

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
  if (!items || items.length < 1 || !(items instanceof Array))
    return (
      <div className="h-full w-full">
        <div className="mt-4 grid h-3/4 grid-cols-4 gap-4">
          <Link
            className="place-content-center rounded-2xl border border-black text-center align-middle text-secondary shadow-xl hover:border-secondary hover:bg-secondary hover:text-background"
            to={`items/add`}
          >
            <AdminAddItemCard />
          </Link>
        </div>
      </div>
    )

  return (
    <div className="h-full w-full">
      <div className="mt-4 grid h-3/4 grid-cols-4 gap-4">
        {items.map((item) => (
          <AdminItemCard
            key={item.items_id}
            {...{ ...item, requestDelete: handleDelete }}
          />
        ))}
        <Link
          className="h-[90%] place-content-center rounded-2xl border border-black text-center align-middle text-secondary shadow-xl hover:border-secondary hover:bg-secondary hover:text-background"
          to={`items/add`}
        >
          <AdminAddItemCard />
        </Link>
      </div>
    </div>
  )
}
