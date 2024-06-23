import { useState } from 'react'
import { Link } from 'react-router-dom'
import useDonationsByDonor from '../../hooks/useDonations'
import { useFilteredDonationsByDonor } from '../../hooks/useDonations'
import DonationFilter from './DonationToPdf/FilterDonationsByPeriod'
import DateFilter from './DonationToPdf/FilterDonationsByDate'

interface Props {
  id: number
}

export default function DonationHistory(props: Props) {
  const [period, setPeriod] = useState('all')
  const [date, setDate] = useState('')

  const allTimeQuery = useDonationsByDonor(props.id)
  const filteredQuery = useFilteredDonationsByDonor(props.id, period, date)

  const { isLoading, isError, data } =
    period === 'all' && !date ? allTimeQuery : filteredQuery

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong!</p>
  }

  return (
    <>
      <section className="relative h-full w-[100%]   p-6">
        <div className="h-auto w-auto  bg-background">
          <div className="flex items-center">
            <h1 className="mb-4 font-display text-5xl font-medium capitalize text-secondary">
              Your
            </h1>
            <h1 className="mb-4 font-display text-5xl font-medium capitalize text-primary">
              Donations
            </h1>
          </div>
        </div>
        <div className="mx-4 flex space-x-5">
          <DonationFilter onPeriodChange={setPeriod} />
          <DateFilter onDateChange={setDate} />
        </div>
        {data.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <p className="text-lg text-secondary">
              Uh oh, it seems you havent made any donations yet.
            </p>
            <Link
              to="/"
              className="hover:text-primary-dark text-primary underline"
            >
              Lets make your first donation
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-7 gap-2 border-b-2 border-secondary p-2 text-secondary hover:border-primary hover:text-primary">
              <div>Donation Value</div>
              <div>Item</div>
              <div>Item Value</div>
              <div>Register</div>
              <div>Charity</div>
              <div>Date</div>
              <div>Anonymous?</div>
            </div>
            <ul>
              {data.map((donation) => (
                <li key={`donation: ${donation.id}`}>
                  <div className="grid grid-cols-7 gap-2 border-t-2">
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
                      {new Date(donation.datetime).toLocaleDateString()}
                    </div>
                    <div>{donation.anonymous ? 'Yes' : 'No'}</div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}
