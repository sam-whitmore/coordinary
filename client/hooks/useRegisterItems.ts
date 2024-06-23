import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ItemData, ItemFromRegister } from '../../models/item'

const rootURL = '/api/v1/registers_items'

export default function useRegisterItems() {
  function useGetItemsByRegisterId(id: number) {
    return useQuery({
      queryKey: ['register', id],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as ItemFromRegister[]
      },
    })
  }

  function useAddItemToRegister() {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async ({
        item,
        register_id,
      }: {
        item: ItemData
        register_id: number
      }) => {
        const token = await getAccessTokenSilently()
        const res = await request
          .post(`${rootURL}/${register_id}`)
          .auth(token, { type: 'bearer' })
          .send(item)

        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['items'] })
      },
    })
  }

  function useDeleteRegisterItem() {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async (id: number) => {
        const token = await getAccessTokenSilently()
        const res = await request
          .delete(`${rootURL}/${id}`)
          .auth(token, { type: 'bearer' })

        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['register'] })
      },
    })
  }

  return {
    addToRegister: useAddItemToRegister(),
    del: useDeleteRegisterItem(),
    byRegisterId: useGetItemsByRegisterId,
  }
}
