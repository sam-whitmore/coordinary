import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import request from 'superagent'
// import * as API from '../apis/.ts'
// import { Item } from '../../models/item.ts'

const rootURL = '/api/v1/stripe'

export default function useCustomStripe() {
  return {
    useCreatePaymentIntent: useCreatePaymentIntent(),
  }
}

export function useStripeMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['register'] })
    },
  })

  return mutation
}

export function useCreatePaymentIntent() {
  return useStripeMutation(createPaymentIntent)
}

async function createPaymentIntent({
  token,
  amount,
}: {
  token: string
  amount: number
}) {
  return await request
    .post(`${rootURL}/create-payment-intent`)
    .set('Authorization', `Bearer ${token}`)
    .send({ amount })
    .then((res) => res.body)
}
