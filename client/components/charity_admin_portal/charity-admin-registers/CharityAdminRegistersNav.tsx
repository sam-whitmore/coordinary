import useRegisters from "../../../hooks/useRegisters"
import { Charity } from "../../../../models/charity"

interface Props extends Charity {
  onRegisterSelected: (_:number) => void
}

export default function CharityAdminRegistersNav(props: Props) {

  const { data: registers, isPending, isError, error } = useRegisters().allOfCharity(props.id) 

  const handleClick = (id:number) => {
    props.onRegisterSelected(id)
  }

  if (isPending) {
    ;<div>Loading...</div>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!registers) return <p>Error: no registers found</p>

  return (
    <div className="w-full h-[10%] border-box border-4 border-purple-500 flex">
      {Object.values(registers).map((register) => { return <button key={register.id} className="mx-4" onClick={() => handleClick(register.id)}>{register.name}</button>})}
    </div>
  )
}