import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
import * as db from '../db/functions/charityPreferences.ts'

const router = Router()
//GET /slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    const result = await db.getCharityPrefsBySlug(slug)
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

//PATCH /slug
router.patch('/:slug', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const {
      charityId,
      slug,
      primary,
      secondary,
      accent,
      text,
      background,
      lightbackground,
      hero,
    } = req.body
    const id = await db.updateCharityPrefsBySlug(slug, {
      charityId,
      slug,
      primary,
      secondary,
      accent,
      text,
      background,
      lightbackground,
      hero,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
