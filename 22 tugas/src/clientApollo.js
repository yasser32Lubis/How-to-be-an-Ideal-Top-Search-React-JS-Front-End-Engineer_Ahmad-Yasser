import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    url:"https://living-pigeon-16.hasura.app/v1/graphql",
    cache : new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret':
        'HdJlNce7oJSBLEv8XRCWzUiCRkLQ3CLDmbJU4Wtg5DBz5eT8kP7MEIkRJxfcmCqE',
    }
});

export default client;