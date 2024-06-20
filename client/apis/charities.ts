import request from 'superagent'
import { Charity, CharityData } from '../../models/charity'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function getCharitiesByDonorFollowing(token: string, id: number) {
  const res = await request
    .get(`${rootURL}/charities/donor/${id}`)
    .set('Authorization', `Bearer: ${token}`)
  return res.body as Charity[]
}

export async function donorUnfollowCharity({
  token,
  charityId,
  donorId,
}: {
  token: string
  charityId: number
  donorId: number
}) {
  return await request
    .delete(`${rootURL}/${donorId}/${charityId}/`)
    .set('Authorization', `Bearer ${token}`)
}
