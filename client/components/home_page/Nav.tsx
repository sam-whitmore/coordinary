export default function Nav() {
  return (
    <div className="border-box flex justify-between border-4 border-orange-400">
      <div className="p-2">
        <button className="my-auto">Coordinary.org</button>
      </div>
      <div className="flex justify-center">
        <p className="px-4 my-auto">Getting Started</p>
        <p className="px-4 my-auto">About Us</p>
        <p className="px-4 my-auto">Resources</p>
        <p className="px-4 my-auto">Contact Us</p>
      </div>
      <div className="p-2">
        <button className="my-auto">Sign Up</button>
      </div>
    </div>
  )
}