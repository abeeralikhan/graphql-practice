import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// typeDefs --> represents abstract syntax tree of the gql code
