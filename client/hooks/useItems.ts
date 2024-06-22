import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import request from 'superagent'
import { ItemData } from '../../models/item'
import * as API from '../apis/items.ts'

interface Item {
  id: number
  name: string
  image: string
  used: boolean
  priceInNZD: number
  NZDRaised: number
}

const rootURL = '/api/v1/items'

export default function useItems(id: number) {
  function useGetItems() {
    return useQuery({
      queryKey: ['items'],
      queryFn: async () => {
        const res = await request.get(rootURL)
        return res.body as Item[]
      },
    })
  }

  function useGetItemById(id: number) {
    return useQuery({
      queryKey: ['items', id],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as Item
      },
    })
  }

  return {
    useGetItems: useGetItems(),
    useGetItemById: useGetItemById(id),
    useEditItem: useEditItem(),
    useDeleteItem: useDeleteItem(),
    useAddItem: useAddItem(),
    useUploadImage: useUploadImage(),
  }
}

export function useItemMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    },
  })

  return mutation
}

export function useAddItem() {
  return useItemMutation(API.addItem)
}

export function useDeleteItem() {
  return useItemMutation(API.deleteItem)
}

export function useEditItem() {
  return useItemMutation(API.editItem)
}

export function useUploadImage() {
  return useItemMutation(API.uploadImage)
}
