import { Link } from 'react-router-dom'

export default function HeroContainer() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <h1 className="mx-auto animate-bounce font-display text-7xl text-primary">
        Gift <span className="text-7xl text-secondary">Registries</span>
      </h1>
      <h1 className="mx-auto font-display text-8xl text-primary">
        <span className="text-5xl text-secondary">for </span>
        <Link
          to="charities"
          className="decoration-4 underline-offset-8 hover:underline"
        >
          Charities
        </Link>
      </h1>
    </div>
  )
}
