import CharitySummary from './charities_list/CharitySummary'
import useCharities from '../../hooks/useCharities'

export default function CharitiesList() {
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) console.log('awaiting data...')
  if (isError) return console.error(`Error: ${error.message}`)
  if (!charities)
    
    return (
      <div className="max-w-1/5 ml-auto h-full w-auto overflow-y-scroll border-b-2 border-l-2 border-secondary hover:border-primary">
        <h2 className="mt-4 px-8 text-center font-display text-2xl underline underline-offset-2">
          Charities
        </h2>
        <p>Error: no charities found.</p>
      </div>
    )
  return (
    <div className="max-w-1/5 ml-auto h-full w-auto overflow-y-scroll border-b-2 border-l-2 border-secondary hover:border-primary">
      <h2 className="mt-4 px-8 text-center font-display font-medium text-3xl text-secondary hover:text-primary">
        Charities
      </h2>
      {charities.map((charity) => {
        return <CharitySummary key={charity.id} {...charity} />
      })}
    </div>
  )
}
