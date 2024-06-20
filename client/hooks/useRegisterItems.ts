import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Register, RegisterData } from '../../models/register'
import { Item, ItemFromRegister } from '../../models/item'

const rootURL = '/api/v1/registers_items'

export default function useRegisterItems() {

  function useGetItemsByRegisterId(id: number) {
    return useQuery({
      queryKey: ['items'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as ItemFromRegister[]
      }
    })
  }

  function useGetAllRegisterItems() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    return useQuery({
      queryKey: ['registerItems'],
      queryFn: async () => {
        const token = await getAccessTokenSilently()
        if (!token) {
          throw new Error(`Not logged in`)
        }

        const res = await request
          .get(`${rootURL}`)
          .auth(token, { type: 'bearer' })

        return res.body as Register[]
      },
      enabled: isAuthenticated,
    })
  }

  function useAddRegisterItems() {
    const { getAccessTokenSilently } = useAuth0()
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: async (register: RegisterData) => {
        const token = await getAccessTokenSilently()
        const authorizedResponse = {
          ...register,
          user_auth0_sub: token,
        }
        const res = await request
          .post(`${rootURL}`)
          .send(authorizedResponse)
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
    add: useAddRegisterItems().mutate,
    allByRegister: useGetAllRegisterItems,
    del: useDeleteRegisterItem().mutate,
    byRegisterId: useGetItemsByRegisterId 
  }
}
