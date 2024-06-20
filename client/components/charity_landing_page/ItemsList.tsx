import useItems from '../../hooks/useItems'

function ItemsList() {
  const { data: items, isLoading, isError, error } = useItems()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>Price: {item.priceInNZD}</p>
            <p>Amount raised: {item.NZDRaised}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList
