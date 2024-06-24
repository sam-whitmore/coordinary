import {
  Register,
  RegisterData,
  RegisterSnakeCase,
} from '../../models/register.ts'
import db from './connection.ts'

//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = [
  'id',
  'name',
  'charity_id as charityId',
  'description as description',
  'active as active',
]

const joinColumns = [
  'charities.id as charityId',
  'registers.id as registerId',
  'registers.name as name',
  'registers.description as description',
  'registers.active as active',
  'charities.default_register_id as charityDefaultId',
]

export async function getAllRegisters() {
  const result = await db('registers').select(columns)
  return result
}

// This fetches every active register assigned to a charity.
export async function getRegistersByCharitySlug(slug: string) {
  const result = await db('charities')
    .where({ slug, active: true })
    .join('registers', 'registers.charity_id', 'charities.id')
    .select(joinColumns)
  return result
}

export async function getRegister(id: number): Promise<Register> {
  return await db('registers').where({ id }).first().select(columns)
}

export async function addRegister(data: RegisterData) {
  // prevents typos when switching to snakecase
  const snakecase: RegisterSnakeCase = {
    name: data.name,
    charity_id: data.charityId,
    description: data.description,
    active: data.active,
  }
  const [id] = await db('registers').insert(snakecase)
  return id
}

export async function editRegister(id: number, data: RegisterData) {
  const snakecase: RegisterSnakeCase = {
    name: data.name,
    charity_id: data.charityId,
    description: data.description,
    active: data.active,
  }
  return await db('registers').where({ id }).update(snakecase)
}
