import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import * as API from '../apis/donations.ts'

export default function useDonationsByDonor(id: number) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['donordonations', id],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await API.getDonorHistory({ token, id })
    },
    enabled: !!isAuthenticated,
  })

  return {
    ...query,
  }
}

export function useFilteredDonationsByDonor(
  id: number,
  period: string,
  date?: string,
) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['donordonations', id, period, date],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await API.getDonorHistoryWithFilters({ token, id, period, date })
    },
    enabled: !!isAuthenticated,
  })

  return {
    ...query,
  }
}
