import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { CharityInfo } from '../../models/charityInfo'

const rootURL = '/api/v1/charities_info'

export default function useCharities() {
  function useGetCharityInformationBySlug(charitySlug: string) {
    return useQuery({
      queryKey: ['charities_info'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${charitySlug}`)
        return res.body as CharityInfo
      },
    })
  }

  return {
    info: useGetCharityInformationBySlug,
  }
}
