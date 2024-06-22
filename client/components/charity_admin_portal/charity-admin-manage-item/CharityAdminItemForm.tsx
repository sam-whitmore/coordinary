import {ItemData} from '../../../../models/item'

interface Props extends ItemData{
  id? : number
  onSubmit: (_) => void

}

export default function CharityAdminItemForm(props:Props){
  const [formState, setFormState] = useState({name:props.name, image:props.image, used:props.used, priceInNZD:props.price})

  const handleSubmit = () => {
    props.onSubmit(formState)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value=""></input>
        </form>
      </div>
  )
}