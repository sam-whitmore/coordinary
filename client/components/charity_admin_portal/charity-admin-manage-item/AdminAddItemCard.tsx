import { Link } from 'react-router-dom'

export default function AdminAddItemCard() {
  return (
    <Link
      className="bg-lightbackground h-[500px] place-content-center rounded-2xl border border-secondary text-center align-middle text-secondary shadow-xl transition duration-[1500ms] ease-in-out hover:border-secondary hover:bg-secondary hover:text-background"
      to={`items/add`}
    >
      <h1 className="select-none text-center text-3xl">Add A New Item</h1>
      <div className="align-center mx-auto h-2/3 w-2/3 select-none text-center text-8xl">
        +
      </div>
    </Link>
  )
}
