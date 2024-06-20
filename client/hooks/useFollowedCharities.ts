import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import * as API from '../apis/charities.ts'

export default function useFollowedCharities(id: number) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['followedCharities', id],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await API.getCharitiesByDonorFollowing(token, id)
    },
    enabled: !!isAuthenticated,
  })

  return {
    ...query,
    unfollow: useUnfollowCharity(),
  }
}

export function useCharityMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['followedCharities'] })
    },
  })

  return mutation
}

export function useUnfollowCharity() {
  return useCharityMutation(API.donorUnfollowCharity)
}
