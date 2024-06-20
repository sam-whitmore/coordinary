import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { useAuth0 } from '@auth0/auth0-react'

interface Item {
  id: number
  name: string
  image: string
  used: boolean
  priceInNZD: number
  NZDRaised: number
}

const rootURL = '/api/items'

export function useItems() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  return useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (!token) {
        throw new Error('Not logged in')
      }

      const res = await request.get(rootURL).auth(token, { type: 'bearer' })

      return res.body as Item[]
    },
    enabled: isAuthenticated,
  })
}

export default useItems
