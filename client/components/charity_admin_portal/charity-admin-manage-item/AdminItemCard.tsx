import { Link } from 'react-router-dom'
import { ItemFromRegister } from '../../../../models/item'

interface Props extends ItemFromRegister {
  requestDelete: (id: number) => void
}
export default function AdminItemCard(item: Props) {
  const progressBarWidth: string = `${((item.NZDRaised / item.priceInNZD) * 100).toFixed(2)}%`

  return (
    <div className="h-[90%] rounded-2xl border border-black text-center shadow-xl hover:border-secondary">
      <img
        className="mx-auto mb-4 mt-4 rounded-full border border-black"
        src={`/uploads/${item.image}`}
        width={'125px'}
        alt={item.name}
      ></img>
      <h1 className="text-2xl">
        {item.name} <span className="text-sm">{item.used ? '(Used)' : ''}</span>
      </h1>
      <div className="text-center">{progressBarWidth} Funded!</div>
      <div className="mx-auto mt-2 h-6 w-3/4 rounded-2xl bg-gray-300 shadow-xl">
        <div
          className="h-6 rounded-2xl bg-gradient-to-r from-purple-500 to-amber-500 shadow-xl"
          style={{ width: progressBarWidth }}
        ></div>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>${item.priceInNZD}</span>
        </div>
        <div className="mt-4 text-justify text-sm">{item.description}</div>
        <div className="mt-4 text-justify text-sm">{item.notes}</div>
        <div className="mt-6 flex justify-between">
          <button
            className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => item.requestDelete(item.items_id)}
          >
            Remove
          </button>
          <Link
            className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            to={`items/edit/${item.items_id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  )
}
