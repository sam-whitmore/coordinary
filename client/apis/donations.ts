import request from 'superagent'
import { DonationData, DonationWithJoinedData } from '../../models/donation'

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

  return result.body as DonationWithJoinedData[]
}

export async function getDonorHistoryWithFilters({
  token,
  id,
  period,
  date,
}: {
  token: string
  id: number
  period: string
  date?: string
}) {
  const query = request
    .get(`${rootURL}/donations/donor/${id}`)
    .query({ period })
  if (date) {
    query.query({ date })
  }
  const result = await query.set('Authorization', `Bearer ${token}`)

  return result.body as DonationWithJoinedData[]
}

export async function createDonation({
  token,
  donation,
}: {
  token: string
  donation: DonationData
}) {
  return await request
    .post(`${rootURL}/donations`)
    .set('Authorization', `Bearer ${token}`)
    .send(donation)
}
