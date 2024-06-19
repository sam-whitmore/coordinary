import express, { Request, Response } from 'express'


interface Item {
  id: number,
  name: string,
  image: blob,
  necdw: boolean,
  price_in_NZD: notNull,
  NZD_raised: notNull,
}

const items: Item[]
const router = express.Router()

//Route to get all n id
router.get('/', (req: Request, res: Response) => {
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})



//route for getting specific id?? to fix
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = items.find(item => item.id === id)

    if (!item) {
      return res.status(404).json({ error: 'Item not found' })
    }

    res.json(item)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


//to create
router.post('/', (req: Request, res: Response) => {
  try {

    //fix*
    const { item[] } = req.body
    const newItem: Item = { id:, name:, image:, price_in_NZD:, NZD_raised: }

    items.push(newItem);
    res.status(201).json(newItem)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})



//to update
router.put('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params
    //fix*
    const { item[] } = req.body
    const item = items.find(item => item.id === id )

    if (!item) {
      return res.status(404).json({ error: 'Item not found' })
    }
//?
    item.name = name !== undefined ? name : item.name;
    item.description = description !== undefined ? description : item.description;
    item.price = price !== undefined ? price : item.price;

    res.json(item)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


//delete by id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const index = items.findIndex(item => item.id === id)

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' })
    }

    const deletedItem = items.splice(index, 1)[0]
    res.json(deletedItem)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router

