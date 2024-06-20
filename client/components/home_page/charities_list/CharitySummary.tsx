import { Link } from "react-router-dom"
import { Charity } from "../../../../models/charity"

export default function CharitySummary(charity: Charity) {

  return (
    <div className="w-full h-36 border-box border-4 border-sky-400">
      <Link to={(charity.name).toLowerCase()}>{charity.name}</Link>
      <h3>Charity Location</h3>
    </div>
  )
}