import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Register, RegisterData } from '../../models/register'

const rootURL = '/api/v1/registers'

export default function useRegisters() {
  function useGetAllRegisters() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    return useQuery({
      queryKey: ['registers'],
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

  function useAddRegister() {
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
        queryClient.invalidateQueries({ queryKey: ['registers'] })
      },
    })
  }

  function useDeleteRegister() {
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
        queryClient.invalidateQueries({ queryKey: ['registers'] })
      },
    })
  }

  return {
    add: useAddRegister().mutate,
    allByRegister: useGetAllRegisters,
    del: useDeleteRegister().mutate,
  }
}
