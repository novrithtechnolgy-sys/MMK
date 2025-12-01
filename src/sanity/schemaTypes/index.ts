import { type SchemaTypeDefinition } from 'sanity'
import whatWeCreate from './whatWeCreate'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [whatWeCreate],
}
