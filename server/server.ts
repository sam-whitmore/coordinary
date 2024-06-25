import express from 'express'
import * as Path from 'node:path'
import charitiesRoutes from './routes/charities.ts'
import itemsRoutes from './routes/items.ts'
import registerRoutes from './routes/registers.ts'
import donationRoutes from './routes/donations.ts'
import charityCategories from './routes/charityCategories.ts'
import registers_itemsRoutes from './routes/register_items.ts'
import donorRoutes from './routes/donors.ts'
import uploadRoutes from './routes/upload.ts'
import charitiesInfoRoutes from './routes/charitiesInfo.ts'
import charitiesPreferences from './routes/charitiesPreferences.ts'

const server = express()

server.use(express.json())
server.use('/upload', express.static(Path.resolve('public/uploads')))

server.use('/api/v1/charities', charitiesRoutes)
server.use('/api/v1/items', itemsRoutes)
server.use('/api/v1/registers', registerRoutes)
server.use('/api/v1/registers_items', registers_itemsRoutes)
server.use('/api/v1/donations', donationRoutes)
server.use('/api/v1/charityCategories', charityCategories)
server.use('/api/v1/charities_info', charitiesInfoRoutes)
server.use('/api/v1/donors', donorRoutes)
server.use('/api/v1/upload', uploadRoutes)
server.use('/api/v1/charities_preferences', charitiesPreferences)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
