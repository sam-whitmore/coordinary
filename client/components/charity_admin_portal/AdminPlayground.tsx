import useRegisterItems from "../../hooks/useRegisterItems"

export default function AdminPlayground() {

  const hooks = useRegisterItems()
  hooks.addToRegister(2).mutate({ name: 'mattress', used: false, priceInNZD: 189.99, NZDRaised: 100 })

  return (
    <div className="w-5/6 h-full border-box border-4 border-green-400">
      <h1>Admin Playground</h1>
      <p>Use this component to test your code if you are unsure where to put it!</p>
    </div>
  )
}