import { Router } from 'express'
import * as db from '../db/register_items'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ errorMessage: 'Invalid Register ID' })
    }
    const result = await db.getItemsByRegisterId(id)
    if (!result) {
      return res.status(404).json({ errorMessage: 'Register Not Found' })
    }
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

export default router