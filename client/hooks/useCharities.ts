import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Charity } from '../../models/charity'

const rootURL = '/api/v1/charities'

export default function useCharities() {
  function useGetAllCharities() {
    return useQuery({
      queryKey: ['charities'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}`)
        return res.body as Charity[]
      },
    })
  }

  function useGetCharityInformation(charitySlug: string) {
    return useQuery({
      queryKey: ['charity'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${charitySlug}`)
        return res.body as Charity
      },
    })
  }

  return {
    all: useGetAllCharities,
    get: useGetCharityInformation,
  }
}
