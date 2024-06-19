import { RegisterData, RegisterSnakeCase } from '../../models/register.ts'
import db from './connection.ts'

//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const columns = ['id', 'name', 'charity_id as charityId']

export async function getAllRegisters() {
  const result = await db('registers').select(columns)
  return result
}

export async function getRegisterById(id: number) {
  const result = await db('registers').where({ id }).select(columns).first()
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
