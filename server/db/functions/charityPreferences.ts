import {
  CharityPreferencesData,
  CharityPreferencesSnakeCase,
} from '../../../models/charityPreferences'
import db from '../connection.ts'

const columns = [
  'id',
  'charity_id as charityId',
  'slug',
  'primary',
  'secondary',
  'accent',
  'text',
  'background',
  'lightbackground',
  'hero',
]

export async function getCharityPrefsBySlug(slug: string) {
  return await db('charities_preferences')
    .where({ slug })
    .first()
    .select(columns)
}

export async function updateCharityPrefsBySlug(
  slug: string,
  data: CharityPreferencesData,
) {
  const snakeCase: CharityPreferencesSnakeCase = {
    charity_id: data.charityId,
    slug: data.slug,
    primary: data.primary,
    secondary: data.secondary,
    accent: data.accent,
    text: data.text,
    background: data.background,
    lightbackground: data.lightbackground,
    hero: data.hero,
  }
  return await db('charities_preferences').where({ slug }).update(snakeCase)
}
