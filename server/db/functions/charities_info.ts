import db from '../connection.ts'
import {
  CharityInfo,
  CharityInfoSnakeCase,
} from '../../../models/charityInfo.ts'
//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const joinColumns = [
  'charities.id as charityId',
  'charities.slug as slug',
  'charities.name as name',
  'charities_info.physical_address as physicalAddress',
  'charities_info.postal_address as postalAddress',
  'charities_info.opening_hours as openingHours',
  'charities_info.phone as phone',
  'charities_info.email as email',
  'charities_info.vision as vision',
  'charities_info.mission as mission',
  'charities_info.values as values',
  'charities_info.services as services',
  'charities_info.story as story',
  'charities_info.emphatic as emphatic',
  'charities_info.cta_statement as ctaStatement',
  'charities_info.stakeholders as stakeholders',
  'charities_info.image as image',
]

export async function getCharityInfoBySlug(slug: string) {
  const result = await db('charities')
    .join('charities_info', 'charities.id', 'charities_info.charity_id')
    .where('charities.slug', slug)
    .select(joinColumns)
    .first()
  return result
}

export async function addCharityInfoBySlug(slug: string, info: CharityInfo) {
  const [charity] = await db('charities').where({ slug }).select('id')

  const newInfo: CharityInfoSnakeCase = {
    charity_id: charity.id,
    physical_address: info.physicalAddress,
    postal_address: info.postalAddress,
    opening_hours: info.openingHours,
    phone: info.phone,
    email: info.email,
    vision: info.vision,
    mission: info.mission,
    values: info.values,
    services: info.services,
    story: info.story,
    emphatic: info.emphatic,
    cta_statement: info.ctaStatement,
    stakeholders: info.stakeholders,
    image: info.image,
  }

  await db('charities_info').insert(newInfo)

  return { success: true }
}

export async function editCharityInfoBySlug(slug: string, info: CharityInfo) {
  const [charity] = await db('charities').where({ slug }).select('id')

  const snakeCase: CharityInfoSnakeCase = {
    charity_id: charity.id,
    physical_address: info.physicalAddress,
    postal_address: info.postalAddress,
    opening_hours: info.openingHours,
    phone: info.phone,
    email: info.email,
    vision: info.vision,
    mission: info.mission,
    values: info.values,
    services: info.services,
    story: info.story,
    emphatic: info.emphatic,
    cta_statement: info.ctaStatement,
    stakeholders: info.stakeholders,
    image: info.image,
  }

  await db('charities_info').where({ charity_id: charity.id }).update(snakeCase)

  return { success: true }
}
