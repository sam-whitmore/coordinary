import db from './connection.ts'
import { CharityInfo } from '../../models/charityInfo.ts'
//pre-define snakecase to 'actual' select statements for gets (saves duplication of work if there are changes)
const joinColumns = [
  'charities.id as charityId',
  'charities.slug as slug',
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
]

export async function getCharityInfoBySlug(slug: string) {
  const result = await db('charities')
    .join('charities_info', 'charities.id', 'charities_info.charity_id')
    .where('charities.slug', slug)
    .select(joinColumns)
  return result
}

export async function addCharityInfoBySlug(slug: string, info: CharityInfo) {
  const [charity] = await db('charities').where({ slug }).select('id')

  const newInfo = {
    ...info,
    charity_id: charity.id,
  }

  await db('charities_info').insert(newInfo)

  return { success: true }
}
