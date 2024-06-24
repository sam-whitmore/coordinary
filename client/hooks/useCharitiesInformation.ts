import request from 'superagent'
import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { CharityInfo } from '../../models/charityInfo'
import { useAuth0 } from '@auth0/auth0-react'
import * as API from '../apis/charities'

const rootURL = '/api/v1/charities_info'

export default function useCharities() {
  function useGetCharityInformationBySlug(charitySlug: string) {
    return useQuery({
      queryKey: ['charities_info', charitySlug],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${charitySlug}`)
        return res.body as CharityInfo
      },
    })
  }

  return {
    info: useGetCharityInformationBySlug,
    add: useAddCharity,
  }
}

export function useCharityMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['charities_info'] })
    },
  })

  return mutation
}

export function useAddCharity() {
  const { getAccessTokenSilently } = useAuth0()
  return useCharityMutation(
    async ({ slug, info }: { slug: string; info: CharityInfo }) => {
      const token = await getAccessTokenSilently()
      return API.addCharityInfo(token, slug, info)
    },
  )
}
