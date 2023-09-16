const users = [
    {
        eid: 324,
        firstName: 'John',
        familyName: 'John',
        dateJoined: '10/10/2014',
    }, 
    {
        eid: 304,
        firstName: 'Joinhn',
        familyName: 'Joojohn',
        dateJoined: '10/10/2014',
    }
]


const resolver = {
    Query: {
        employees: () => users,
    }
}

export default resolver;