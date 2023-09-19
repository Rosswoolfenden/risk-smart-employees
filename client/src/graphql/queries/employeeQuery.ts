import { gql } from '@apollo/client';

const Employees = gql `
    query Employee { 
        employees { 
            eid
            firstName
            familyName
            email
            position
            dateJoined
        }
    }
`

export default Employees;