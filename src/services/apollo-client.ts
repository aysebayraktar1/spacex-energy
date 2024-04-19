import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              launches: {
                keyArgs: false,
                merge(existing = [], incoming) {
                  return [...existing, ...incoming];
                },
              },
            },
          },
        },
      }),
});

export default client;