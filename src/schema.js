import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        test: String,
        greet(name: String): String
        forceGreet(name: String!): String
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;