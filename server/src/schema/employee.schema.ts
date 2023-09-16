import { gql } from "apollo-server";

const typeDefs = gql`
    type Employee {
        # employee id
        eid: Int!
        firstName: String!
        familyName: String!
        dateJoined: String!
        knowAs: String
        position: String
    }

    type Query { 
        employees: [Employee]
    }
 `;

 export default typeDefs