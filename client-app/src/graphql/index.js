import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  url: "/graphql",
});

export default client;
