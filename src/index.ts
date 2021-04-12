import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

console.log(ApolloServer);
