import { ItemFromRegister } from "../../../../../models/item"

export default function ItemCard(item: ItemFromRegister) {
  return (
    <div className="w-full h-36 border-box border-4 border-sky-400">
      <h1>{item.name}</h1>
    </div>
  )
}