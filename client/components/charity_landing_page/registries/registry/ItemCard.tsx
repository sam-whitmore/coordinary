import { ItemFromRegister } from '../../../../../models/item'
import dateMath from '../../../../timeHelper'

export default function ItemCard(item: ItemFromRegister) {
  const progressBarWidth: string = `${((item.NZDRaised / item.priceInNZD) * 100).toFixed(2)}%`

  console.log(item)

  return (
    <>
      <dialog
        id={`modal_${item.items_id}`}
        className="modal h-3/4 w-1/2 rounded-xl border border-black p-4"
      >
        <div className="modal-box">
          <img
            className="mx-auto mb-4 mt-4 h-[125px] rounded-full border border-black"
            src={`/uploads/${item.image}`}
            width={'125px'}
            alt={item.name}
          ></img>
          <h3 className="text-center text-lg font-bold">{item.name}</h3>
          <div className="py-4">
            <div className="">
              <p>First, select or enter in a custom amount:</p>
            </div>
            <div className=""></div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="h-[90%] rounded-2xl border border-black text-center shadow-xl">
        <div className="box-border h-[125px]">
          <img
            className="mx-auto mb-4 mt-4 h-[125px] rounded-full border border-black"
            src={`/uploads/${item.image}`}
            width={'125px'}
            alt={item.name}
          ></img>
        </div>
        <h1 className="text-2xl">
          {item.name}{' '}
          <span className="text-sm">{item.used ? '(Used)' : ''}</span>
        </h1>
        <div className="text-center text-sm">
          Listed {`${dateMath(item.date)}`}
        </div>
        <br />
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
          <div className="mt-6">
            <button
              className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              onClick={() =>
                document.getElementById(`modal_${item.items_id}`).showModal()
              }
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
