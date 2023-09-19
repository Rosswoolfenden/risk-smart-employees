import { gql } from '@apollo/client';

const EditEmployee = gql`
    
    mutation editEmployee(
        $eid: Int!
        $firstName: String!
        $familyName: String!
        $dateJoined: String!
        $knowAs: String!
        $position: String!
        $email: String!
    ){
        updateEmployee(
            eid: $eid
            firstName: $firstName   
            familyName: $familyName
            dateJoined: $dateJoined
            knowAs: $knowAs
            position: $position
            email: $email
        )
    }
`
export default EditEmployee;