export interface DonorData {
  auth0Id: string
  email: string
}

export interface Donor extends DonorData {
  id: number
}

export interface DonorSnakeCase {
  id?: number
  auth0_id: string
  email: string
}
