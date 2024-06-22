import { ItemFromRegister } from "../../../../../models/item"

export default function ItemCard(item: ItemFromRegister) {
  return (
    <div className="w-full h-auto p-8">
      <h1>{item.priceInNZD}</h1>
    </div>
  )
}