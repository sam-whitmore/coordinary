export interface CharityPreferencesData {
  charityId: number
  slug: string
  primary: string
  secondary: string
  accent: string
  text: string
  background: string
  lightbackground: string
  hero: string
}

export interface CharityPreferences extends CharityPreferencesData {
  id: number
}

export interface CharityPreferencesSnakeCase {
  charity_id: number
  slug: string
  primary: string
  secondary: string
  accent: string
  text: string
  background: string
  lightbackground: string
  hero: string
}
