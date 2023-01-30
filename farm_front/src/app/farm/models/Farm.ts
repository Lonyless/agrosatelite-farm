import { Owner } from './Owner'
import { Model } from './abstract_model'

export interface Farm extends Model {
  name?: string
  geometry?: any
  area?: number
  centroid?: number[]
  creation_date?: Date
  owner?: Owner
  city?: number
}



export interface FarmPut extends Omit<Farm, 'owner'> {
  owner: number
}
