import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Register, RegisterData } from '../../models/register'
import { Item, ItemData, ItemFromRegister } from '../../models/item'

const rootURL = '/api/v1/registers_items'

export default function useRegisterItems() {
  function useGetItemsByRegisterId(id: number) {
    return useQuery({
      queryKey: ['items', id],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as ItemFromRegister[]
      },
    })
  }

  function useAddItemToRegister(register_id: number) {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async (item: ItemData) => {
        const token = await getAccessTokenSilently()
        const res = await request
          .post(`${rootURL}/${register_id}`)
          .send(item)
          .auth(token, { type: 'bearer' })

        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['registerItems'] })
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
        queryClient.invalidateQueries({ queryKey: ['registerItems'] })
      },
    })
  }

  return {
    addToRegister: useAddItemToRegister,
    del: useDeleteRegisterItem().mutate,
    byRegisterId: useGetItemsByRegisterId,
  }
}
