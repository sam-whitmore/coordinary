import { Link } from 'react-router-dom'
import { Charity } from '../../../../models/charity'

export default function CharitySummary(charity: Charity) {
  return (
    <div className="my-4 h-auto w-full px-8 text-right">
      <Link
        to={charity.slug}
        className="font-display text-lg text-secondary hover:text-primary"
      >
        {charity.name}
      </Link>
      <h3 className="font-thin text-sm italic">
        Insert Charity Description; Location; Contact; Summary here...
      </h3>
    </div>
  )
}
