import Nav from "../components/home_page/Nav"
import HeroContainer from "../components/home_page/HeroContainer"
import CharitiesList from "../components/home_page/CharitiesList"

export default function HomePage() {
  return (
    <div className="border-box border-4 border-red-400 h-screen w-screen">
      <Nav />
      <div className="border-box h-4/5 w-full flex">
        <HeroContainer />
        <CharitiesList />
      </div>
    </div>
  )
}