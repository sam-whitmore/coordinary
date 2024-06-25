import CharitySummary from './charities_list/CharitySummary'
import useCharities from '../../hooks/useCharities'
import Spinner from '../Spinner'

export default function CharitiesList() {
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) return <Spinner />
  if (isError) return console.error(`Error: ${error.message}`)

  if (!charities) {
    return (
      <div className="error-container">
        <p>Error: no charities found.</p>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="charities-grid">
        {charities.map((charity) => (
          <CharitySummary key={charity.id} {...charity} />
        ))}
      </div>
    </div>
  )
}
