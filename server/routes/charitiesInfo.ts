import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'
import * as db from '../db/charities_info.ts'

const router = Router()

router.get('/:slug', async (req, res, next) => {
  const slug = req.params.slug
  try {
    const result = await db.getCharityInfoBySlug(slug)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
