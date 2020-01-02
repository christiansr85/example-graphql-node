import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        test: String
        greet(name: String): String
        forceGreet(name: String!): String
        movies: [Movie]
    }

    type Mutation {
        createMovie(movie: MovieMutation!): Movie
    }

    type Movie {
        _id: ID!,
        name: String!
        year: Int
    }

    input MovieMutation {
        name: String!
        year: Int
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;