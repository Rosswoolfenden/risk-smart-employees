import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import env from '../env';

const initClient = () => {
    const httpLink = createHttpLink({
        uri: `${env.graphqlServerHostname}`,
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        credentials: 'same-origin',
    });

    return client;
};

export { initClient };