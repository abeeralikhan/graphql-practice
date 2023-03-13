import { ApolloServer, gql } from "apollo-server";

// typeDefs --> represents abstract syntax tree of the gql code
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// Resolves the query into data
// Must match the schema definition
const resolvers = {
  Query: {
    greeting: () => "Hello there!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 3000 });
console.log(`Server is listening at ${url}`);
