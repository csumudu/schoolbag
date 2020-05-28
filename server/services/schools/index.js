const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const config = require("../../configs/app-config");
const resolvers = require("./resolvers");
const quries = require("./quries");
const mutations = require("./mutations");
const types = require("./types");
const SchoolsService = require("./schools-service");

const port = config.servicePorts.schools;
const server = new ApolloServer({
  dataSources: () => ({
    schoolsService: new SchoolsService(),
  }),
  schema: buildFederatedSchema([
    {
      typeDefs: gql`
        ${types}
        ${quries}
        ${mutations}
      `,
      resolvers,
    },
  ]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`School Service Started : ${url}`);
});
