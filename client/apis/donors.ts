import request from 'superagent'
import { Donor, DonorData } from '../../models/donor'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function getActiveDonor(token: string) {
  const res = await request
    .get(`${rootURL}/donors/`)
    .set('Authorization', `Bearer: ${token}`)
  return res.body as Donor
}

export async function editActiveDonor({
  token,
  data,
}: {
  token: string
  data: DonorData
}) {
  return await request
    .patch(`${rootURL}/donors`)
    .set('Authorization', `Bearer: ${token}`)
    .send(data)
}
