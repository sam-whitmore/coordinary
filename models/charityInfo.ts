export interface CharityInfo {
  charityId: number
  slug: string
  name: string
  physicalAddress: string
  postalAddress: string
  openingHours: string
  phone: string
  email: string
  vision: string
  mission: string
  values: string
  services: string
  story: string
  emphatic: string
  ctaStatement: string
  stakeholders: string

}

export interface CharityInfoSnakeCase {
  charity_id: number
  physical_address: string
  postal_address: string
  opening_hours: string
  phone: string
  email: string
  vision: string
  mission: string
  values: string
  services: string
  story: string
  emphatic: string
  cta_statement: string
  stakeholders: string

}
