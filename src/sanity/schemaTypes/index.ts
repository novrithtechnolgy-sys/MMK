import { type SchemaTypeDefinition } from 'sanity'
import whatWeCreate from './whatWeCreate'
import realEstatePhotos from './realEstatePhotos'
import designPhotos from './designPhotos'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [whatWeCreate,realEstatePhotos,designPhotos],
}
