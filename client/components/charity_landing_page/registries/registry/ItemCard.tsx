import { useEffect, useState } from 'react'
import { ItemFromRegister } from '../../../../../models/item'
import dateMath from '../../../../timeHelper'
import useDonationsByDonor from '../../../../hooks/useDonations'
import { Donation } from '../../../../../models/donation'

export default function ItemCard(item: ItemFromRegister) {
  const progressBarWidth: string = `${((item.NZDRaised / item.priceInNZD) * 100).toFixed(2)}%`
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<number | null>(null)

  const handleSelect = (option) => {
    setSelectedOption(option === selectedOption ? null : option)
    setCustomAmount(null)
  }

  const handleCustomAmountChange = (e) => {
    setSelectedOption(null)
    const enteredAmount = parseFloat(e.target.value)
    if (!isNaN(enteredAmount)) {
      setCustomAmount(enteredAmount)
    }
  }

  const getTotal = () => {
    return selectedOption !== null ? selectedOption : customAmount || 0
  }

  const [donations, setDonations] = useState<Donation[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setFetchError(null)

      try {
        const fetchedDonations = await useDonationsByDonor(item.items_id)
        setDonations(fetchedDonations)
      } catch (error) {
        setFetchError(error)
        console.error('Error fetching donations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [item.items_id, useDonationsByDonor]) // Re-fetch on item ID change

  const findMatchingDonation = (): Donation | null => {
    // Find a donation matching the item ID (assuming donations are loaded)
    return donations?.find((donation) => donation.itemId === item.items_id)
  }

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
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="card bg-base-100 rounded-xl p-4">
              <p>Info on Item:</p>
              <p className="mt-4">{item.description}</p>
              <p className="mt-4">Select an amount:</p>
              <div className="m-4 grid grid-cols-5 gap-2">
                <button
                  className={`rounded-xl border border-blue-500 px-4 py-2 font-bold ${
                    selectedOption === 1 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSelect(1)}
                >
                  $1
                </button>
                <button
                  className={`rounded-xl border border-blue-500 px-4 py-2 font-bold ${
                    selectedOption === 5 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSelect(5)}
                >
                  $5
                </button>
                <button
                  className={`rounded-xl border border-blue-500 px-4 py-2 font-bold ${
                    selectedOption === 10 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSelect(10)}
                >
                  $10
                </button>
                <button
                  className={`rounded-xl border border-blue-500 px-4 py-2 font-bold ${
                    selectedOption === 20 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSelect(20)}
                >
                  $20
                </button>
                <button
                  className={`rounded-xl border border-blue-500 px-4 py-2 font-bold ${
                    selectedOption === 50 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleSelect(50)}
                >
                  $50
                </button>
              </div>
              <div className="flex justify-evenly">
                <p className="mt-4">or Enter in an amount ($):</p>
                <input
                  className="input ml-2 mt-2 h-[25px] w-1/2 border border-black px-2 py-4"
                  type="number"
                  placeholder="1"
                  onChange={handleCustomAmountChange}
                  value={customAmount || ''}
                ></input>
              </div>
              <div className="mt-4 font-bold">
                <p className="text-center">Total: ${getTotal()}</p>
              </div>
              <div className="mx-auto">
                <div className="mx-auto font-bold">
                  <button className="mt-2 rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    Donate ${getTotal()}
                  </button>
                </div>
                <div className="modal-action mt-4 font-bold">
                  <form method="dialog">
                    <button className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 rounded-xl p-4 text-center">
              Recent Donations:
              {isLoading ? (
                <div>Loading donations...</div>
              ) : fetchError ? (
                <div>Error fetching donations: {fetchError.message}</div>
              ) : (
                findMatchingDonation() && ( // Check if donations are loaded and a match exists
                  <p>
                    Someone donated ${findMatchingDonation().valueInNZD} for
                    this item.
                  </p>
                )
              )}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
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
