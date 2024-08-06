import { type SchemaTypeDefinition } from 'sanity';

import headerSchema from './schemas/headerSchema';
import footerSchema from './schemas/footerSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [headerSchema, footerSchema],
};
