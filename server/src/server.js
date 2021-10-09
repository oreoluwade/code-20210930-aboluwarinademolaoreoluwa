const express = require('express');

const { ApolloServer, gql } = require('apollo-server-express');

const cars = require('./api/car-list');

const port = process.env.REACT_APP_SERVER_PORT || 5009;

const typeDefs = gql`
  type Car {
    id: String!
    title: String!
    image: String!
    webFormatURL: String
    description: String
    tags: String
  }

  type Query {
    cars: [Car]
  }
`;

const resolvers = {
  Query: {
    cars: async (obj, args) => cars()
  }
};

const starterQuery = `
query GetCars {
  cars {
    id
    title
    image
    webFormatURL
    description
    tags
  }
}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    tabs: [
      {
        endpoint: '/graphql',
        query: starterQuery
      }
    ]
  }
});
const app = express();
server.applyMiddleware({ app });

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
  ----------------------------------
  This should stop hanging processes
  when ctrl-c fails to kill them.
  ----------------------------------
 */
const kill = require('tree-kill');

const pid = process.pid;
process.on('SIGINT', function () {
  kill(pid, 'SIGKILL');
});
