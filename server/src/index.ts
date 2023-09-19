import { ApolloServer  } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './schema/';
import resolvers from './resolvers/';
import env from './env'
// import initDb from './db/initDb';


// initDb();
const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    introspection: true,
    context: ({ req, res }) => ({ req, res }),
});


server.listen({ port: env.port }).then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`);
});

