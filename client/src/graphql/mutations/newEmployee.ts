import { gql } from '@apollo/client';

const NewEmployee = gql`
        mutation createNewEmployee(
            $firstName: String!
            $familyName: String!
            $knowAs: String!
            $position: String!
            $email: String!
        ) {
            createNewEmployee (
                firstName: $firstName,
                familyName: $familyName,
                knowAs: $knowAs,
                position: $position,
                email: $email,
            ) {
                familyName
                eid
                firstName
                familyName
                position
            }
    }
`
export default NewEmployee