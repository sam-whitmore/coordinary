export interface DonorData {
  auth0Id: string
}

export interface Donor extends DonorData {
  id: number
}

export interface DonorSnakeCase {
  id?: number
  auth0_id: string
}
