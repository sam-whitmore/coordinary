import request from 'superagent'
import { Donation } from '../../models/donation'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function getDonorHistory({
  token,
  id,
}: {
  token: string
  id: number
}) {
  const result = await request
    .get(`${rootURL}/donations/donor/${id}`)
    .set('Authorization', `Bearer ${token}`)

  return result.body as Donation[]
}
