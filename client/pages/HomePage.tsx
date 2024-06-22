import Nav from "../components/home_page/Nav"
import HeroContainer from "../components/home_page/HeroContainer"
import CharitiesList from "../components/home_page/CharitiesList"

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <div className="h-[90%] w-full flex">
        <HeroContainer />
        <CharitiesList />
      </div>
    </div>
  )
}