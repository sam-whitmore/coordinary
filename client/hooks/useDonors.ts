import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import * as API from '../apis/donors.ts'

export default function useActiveDonor() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['donor'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await API.getActiveDonor(token)
    },
    enabled: !!isAuthenticated,
  })

  return {
    ...query,
    edit: useEditDonor(),
    add: useAddDonor,
  }
}

export function useDonorMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donor'] })
    },
  })

  return mutation
}

export function useEditDonor() {
  return useDonorMutation(API.editActiveDonor)
}

export function useAddDonor() {
  return useDonorMutation(API.addDonor)
}
