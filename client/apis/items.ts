import request from 'superagent'
import { Item, ItemData } from '../../models/item'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function editItem({
  token,
  item,
  id,
}: {
  token: string
  item: ItemData
  id: number
}) {
  return await request
    .patch(`${rootURL}/items/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(item)
}

export async function deleteItem({ token, id }: { token: string; id: number }) {
  return await request
    .delete(`${rootURL}/items/${id}`)
    .set('Authorization', `Bearer ${token}`)
}

export async function addItem({
  token,
  item,
  registerid,
}: {
  token: string
  item: ItemData
  registerid: number
}) {
  return await request
    .post(`${rootURL}/items`)
    .set('Authorization', `Bearer ${token}`)
    .send({ item, registerid })
}
//uploads an image to the server, returning a URI in form {image:'this is a uri string'}
export async function uploadImage({
  token,
  image,
}: {
  token: string
  image
}): Promise<{ image: string }> {
  return await request
    .post(`${rootURL}/upload`)
    .set('Authorization', `Bearer ${token}`)
    .attach('image', image)
    .then((res) => res.body)
}
