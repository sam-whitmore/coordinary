import { Link } from "react-router-dom"
import { Charity } from "../../../../models/charity"

export default function CharitySummary(charity: Charity) {

  return (
    <div className="w-full h-auto my-4 px-8 text-text text-right">
      <Link to={(charity.name).toLowerCase()} className="font-display text-lg">{charity.name}</Link>
      <h3 className="italic text-sm font-thin">Charity Location</h3>
    </div>
  )
}