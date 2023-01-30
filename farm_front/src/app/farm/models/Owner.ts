import { Model } from "./abstract_model"

export interface Owner extends Model {
  name?: string
  document?: string
  document_type?: 'CPF' | 'CNPJ'
  creation_date?: Date
}
