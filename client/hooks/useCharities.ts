import request from 'superagent'
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
  MutationFunction,
} from '@tanstack/react-query'
import { Charity, CharityData } from '../../models/charity'
import * as API from '../apis/charities'

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

  function useCharityMutation<TData = unknown, TVariables = unknown>(
    mutationFn: MutationFunction<TData, TVariables>,
  ) {
    const queryClient = useQueryClient()

    const mutation = useMutation<TData, Error, TVariables>({
      mutationFn,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['charities'] })
      },
    })

    return mutation
  }

  function useAddCharity(): UseMutationResult<
    Charity,
    Error,
    { token: string; data: CharityData }
  > {
    return useCharityMutation(({ token, data }) => API.addCharity(token, data))
  }

  return {
    all: useGetAllCharities,
    get: useGetCharityInformation,
    add: useAddCharity(),
  }
}
