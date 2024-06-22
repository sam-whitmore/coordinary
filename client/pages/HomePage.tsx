import HeroContainer from '../components/home_page/HeroContainer'
import CharitiesList from '../components/home_page/CharitiesList'

export default function HomePage() {
  return (
    <div className="h-[90%] w-screen">
      <div className="flex h-full w-full">
        <HeroContainer />
        <CharitiesList />
      </div>
    </div>
  )
}
