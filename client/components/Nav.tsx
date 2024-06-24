import ProfileCard from './nav/ProfileCard'
import Breadcrumbs from '../utility/BreadCrumbing'

export default function Nav() {
  

  return (
      <div className="flex h-[10%] max-h-[80px] min-h-[60px] w-full justify-between border-b-2 border-secondary hover:border-primary">
        <Breadcrumbs />
        <ProfileCard />
      </div>
  )
}
