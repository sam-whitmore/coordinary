import CharitySummary from './charities_list/CharitySummary'
import useCharities from '../../hooks/useCharities'

export default function CharitiesList() {
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) console.log('awaiting data...')
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
