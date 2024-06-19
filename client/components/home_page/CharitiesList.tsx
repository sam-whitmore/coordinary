import CharitySummary from "./charities_list/CharitySummary"

export default function CharitiesList() {
  return (
    <div className="w-1/4 h-full border-box overflow-y-scroll border-4 border-green-400">
      <CharitySummary />
      <CharitySummary />
      <CharitySummary />
      <CharitySummary />
      <CharitySummary />
      <CharitySummary />
      <CharitySummary />
    </div>
  )
}