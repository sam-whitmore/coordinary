import RegistriesNav from "./registries/RegistriesNav"
import Registry from "./registries/Registry"

export default function Registries() {
  return (
    <div className="w-5/6 h-full border-box border-4 border-sky-400">
      <RegistriesNav />
      <Registry />
    </div>
  )
}