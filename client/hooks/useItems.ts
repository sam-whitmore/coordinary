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

export default function useItems(id: number) {
  function useGetItems() {
    return useQuery({
      queryKey: ['items'],
      queryFn: async () => {
        const res = await request.get(rootURL)
        return res.body as Item[]
      },
    })
  }

  function useGetItemById(id: number) {
    return useQuery({
      queryKey: ['items', id],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as Item
      },
    })
  }

  return {
    useGetItems: useGetItems(),
    useGetItemById: useGetItemById(id),
  }
}

// export function useItems() {

//   return useQuery({
//     queryKey: ['items'],
//     queryFn: async () => {
//       const res = await request.get(rootURL)
//       return res.body as Item[]
//     }
//   })
// }

// export default useItems
