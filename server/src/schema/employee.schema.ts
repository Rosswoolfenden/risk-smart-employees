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
        employees(search: String): [Employee]
    }

    type Mutation { 
        createNewEmployee(
            firstName: String!
            familyName: String!
            dateJoined: String
            position: String!
            email: String!
            knowAs: String
        ) : Employee 

        updateEmployee(
            eid: Int!
            firstName: String
            familyName: String
            knowAs: String
            position: String
            email: String
        ) : Employee

        deleteEmployee( 
            eid: Int!
        ) : Employee
    }
 `;

 export default typeDefs