import { Link } from "react-router-dom"

export default function HeroContainer() {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <h1 className="mx-auto text-7xl font-display text-primary">Gift <span className="text-secondary text-7xl">Registries</span></h1>
      <h1 className="mx-auto text-8xl font-display text-primary"><span className="text-5xl text-secondary">for </span><Link to="charities" className="hover:underline decoration-4 underline-offset-8">Charities</Link></h1>
    </div>
  )
}
