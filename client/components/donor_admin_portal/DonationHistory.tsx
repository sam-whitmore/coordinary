import { Link } from 'react-router-dom'
import useDonationsByDonor from '../../hooks/useDonations'
interface Props {
  id: number
}
export default function DonationHistory(props: Props) {
  const { isLoading, isError, data } = useDonationsByDonor(props.id)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <>
      {/* Titles for the history grid */}
      <div className="grid grid-cols-7 gap-2 border-4 border-black text-xl">
        <div>Donation Value</div>
        <div>Item</div>
        <div>Item Value</div>
        <div>Register</div>
        <div>Charity</div>
        <div>Date</div>
        <div>Anonymous?</div>
      </div>
      <ul>
        {data.map((donation) => {
          return (
            <li key={`donation: ${donation.id}`}>
              <div className="grid grid-cols-7 gap-2 border-t-2 ">
                <div>${donation.valueInNZD}</div>
                <div>{donation.itemName}</div>
                <div>{donation.itemPriceNZD}</div>
                <div>{donation.registerName}</div>
                <div>
                  <Link to={`../../../${donation.charitySlug}`}>
                    {donation.charityName}
                  </Link>
                </div>
                <div>
                  {new Date(donation.datetime).toLocaleDateString().toString()}
                </div>
                <div>{`
                  ${donation.anonymous ? 'Yes' : 'No'}
                  `}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
