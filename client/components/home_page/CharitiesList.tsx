import CharitySummary from './charities_list/CharitySummary'
import useCharities from '../../hooks/useCharities'

export default function CharitiesList() {
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) console.log('awaiting data...')
  if (isError) return console.error(`Error: ${error.message}`)
  if (!charities) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Error: no charities found.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid auto-cols-max grid-flow-col gap-4">
        {charities.map((charity) => {
          return <CharitySummary key={charity.id} {...charity} />
        })}
      </div>
    </div>
  )
}
