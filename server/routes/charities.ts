import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/charities.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllCharities()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    const result = await db.getAllCharitiesById(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { categoryId, name, phone, email, location } = req.body
    const id = await db.addCharities({
      categoryId,
      name,
      phone,
      email,
      location,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

//GET /donor/:id - gets charities that a given donor is 'following'
router.get('/donor/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  const id = Number(req.params.id)
  try {
    const result = await db.getAllCharitiesByDonorFollowing(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
})
//DELETE /donor/:donorid/:charityid - removes a given charity from a given donor's 'following' list
router.delete(
  '/donor/:donorid/:charityid',
  checkJwt,
  async (req: JwtRequest, res, next) => {
    try {
      const charityid = Number(req.params.charityid)
      const donorid = Number(req.params.donorid)
      await db.deleteCharitiesByDonorFollowing(charityid, donorid)
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  },
)

//:donorid :charityid (in the body?)

export default router
