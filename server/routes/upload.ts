import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'
// import * as db from '../db/registers.ts'
import * as path from 'path'
import * as fs from 'fs'
import * as db from '../db/items.ts'

import multer from 'multer'
import { Item } from '../../models/item.ts'
const router = Router()

const upload = multer({
  dest: path.resolve('./public/uploads/'),
  limits: { fields: 1, fileSize: 2048 * 1024, files: 1 },
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  },
})

router.post(
  '/',
  upload.single('image'),
  checkJwt,
  async (req: JwtRequest, res, next) => {
    if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
    }
    try {
      const tempPath = req.file.path
      const targetPath = path.join(
        path.resolve('./public/uploads/'),
        `${req.file?.filename}.png`,
      )
      // console.log(req.body)
      fs.rename(tempPath, targetPath, () => {})
      // const { data } = req.body

      // const item: Item = JSON.parse(data)
      // console.log(item)
      const uri = targetPath.split('/uploads/')[1]
      // await db.updateItem(item.id, item)

      res.status(200).json({ image: uri })
    } catch (e) {
      // next(e)
      res.sendStatus(500).json({ errorMessage: 'Only images are allowed!' })
    }
  },
)

export default router
