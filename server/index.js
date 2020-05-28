const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");
const config = require("./configs/app-config");

/**
 * ApolloGateway can be used to aggregate different graphs to single gateway endpoint
 * Heere in this impementation we currently have only one service
 */

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: "SchoolService",
      url: `http://localhost:${config.servicePorts.schools}`,
    },
  ],
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen({ port: config.appConfig.serverPort }).then(({ url }) => {
  console.log(`Server Started : ${url}`);
});
