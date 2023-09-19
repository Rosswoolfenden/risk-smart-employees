import { gql } from "apollo-server";

const typeDefs = gql`

    type Employee {
        # employee id
        eid: Int!
        firstName: String!
        familyName: String!
        dateJoined: String!
        knowAs: String
        position: String!
        email: String!
    }

    type Query { 
        employees: [Employee]
    }

    type Mutation { 
        createNewEmployee(
            firstName: String!
            familyName: String!
            dateJoined: String
            position: String
            email: String
        ) : Employee 

        updateEmployee(
            eid: Int!
            firstName: String!
            familyName: String!
            dateJoined: String!
            knowAs: String!
            position: String!
            email: String!
        ) : Employee

        deleteEmployee( 
            eid: Int!
        ) : Employee
    }
 `;

 export default typeDefs