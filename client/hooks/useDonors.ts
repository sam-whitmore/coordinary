import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import request from 'superagent'
import { DonorData, Donor } from '../../models/donor.ts'
import { useAuth0 } from '@auth0/auth0-react'
import * as API from '../apis/donors.ts'

export default function useGetActiveDonor() {
  const { getAccessTokenSilently } = useAuth0()
  return useQuery({
    queryKey: ['donor'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await API.getActiveDonor(token)
    },
  })
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
