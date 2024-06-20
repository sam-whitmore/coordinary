import useRegisters from '../../../hooks/useRegisters.ts'

export default function Registry() {
  const { data, isPending, isError } = useRegisters().allByRegister()

  if (isPending) {
    ;<div>Loading...</div>
  }

  if (isError) {
    console.error(isError)
  }

  return (
    <div className="border-box h-[90%] w-full border-4 border-pink-400">
      <h1>Registry</h1>
      <p>
        This component contains the currently selected gift; donation register.
        {data?.map((register) => (
          <li key={register.id} className="list-none">
            {register.name}
          </li>
        ))}
      </p>
    </div>
  )
}
