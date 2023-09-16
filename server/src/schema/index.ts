import { gql } from 'apollo-server';
import employee from './employee.schema';

// used inedx file to make easier to add more future endpoints
const typeDefs= gql `
    ${employee}
`

export default typeDefs