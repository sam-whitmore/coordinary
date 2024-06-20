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
      <ul>
        {data.map((donation) => {
          return (
            <li key={`donation: ${donation.id}`}>
              <div>
                <p>${donation.valueInNZD}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
