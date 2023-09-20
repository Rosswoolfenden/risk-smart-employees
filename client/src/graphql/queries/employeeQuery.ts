import { gql } from '@apollo/client';

const Employees = gql `
    query Employee (
        $search: String
    ) { 
        employees (
            search: $search
        ) { 
            eid
            firstName
            familyName
            email
            position
            dateJoined
            knowAs
        }
    }
`

export default Employees;