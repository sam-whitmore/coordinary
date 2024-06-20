import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

interface Item {
  id: number
  name: string
  image: string
  used: boolean
  priceInNZD: number
  NZDRaised: number
}

const rootURL = '/api/v1/items'

export function useItems() {

  return useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await request.get(rootURL)
      return res.body as Item[]
    }
  })
}

export default useItems
