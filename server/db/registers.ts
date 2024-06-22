import { RegisterData, RegisterSnakeCase } from '../../models/register.ts'
import db from './connection.ts'

//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = ['id', 'name', 'charity_id as charityId']

const joinColumns = [
  'charities.id as charityId',
  'registers.id as registerId',
  'registers.name as registerName'
]

export async function getAllRegisters() {
  const result = await db('registers').select(columns)
  return result
}

// This fetches every register assigned to a charity.
export async function getRegistersByCharitySlug(slug: string) {
  const result = await db('charities').where({ slug }).join('registers', 'registers.charity_id', 'charities.id').select(joinColumns)
  return result
}

export async function addRegisters(data: RegisterData) {
  // prevents typos when switching to snakecase
  const snakecase: RegisterSnakeCase = {
    name: data.name,
    charity_id: data.charityId,
  }
  const [id] = await db('registers').insert(snakecase)
  return id
}
