import { gql } from '@apollo/client';

const EditEmployee = gql`
        mutation editEmployee(
            $eid: Int!
            $firstName: String!
            $familyName: String!
            $knowAs: String!
            $position: String!
            $email: String!
        ) {
            updateEmployee (
                eid: $eid,
                firstName: $firstName,
                familyName: $familyName,
                knowAs: $knowAs,
                position: $position,
                email: $email,
            ) {
                firstName
            }
    }
`
export default EditEmployee;