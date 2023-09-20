import { gql } from '@apollo/client';

const SackEmployee = gql`
        mutation deleteEmployee(
            $eid: Int!
        ) {
            deleteEmployee (
                eid: $eid,
            ) {
                firstName
            }
        }
`
export default SackEmployee;