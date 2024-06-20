import CharitySummary from "./charities_list/CharitySummary"
import useCharities from "../../hooks/useCharities"

export default function CharitiesList() {

  // TODO: This useCharities hook currently does not work because all the columns are currently not present within the SQLite database. 
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) console.log('awaiting data...')
  if (isError) return console.error(`Error: ${error.message}`)
  if (!charities) return console.error(`Error: No charities found.`)
  return (
    <div className="w-1/4 h-full border-box overflow-y-scroll border-4 border-green-400">
      {charities.map((charity) => {return <CharitySummary key={charity.id} {...charity} />})}
    </div>
  )
}