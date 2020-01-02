import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        test: String
        greet(name: String): String
        forceGreet(name: String!): String
        movies: [Movie],
        users: [User]
    }

    type Mutation {
        createMovie(movie: MovieMutation!): Movie
        createUser(user: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    type Movie {
        _id: ID!,
        name: String!
        year: Int
    }

    type User {
        _id: ID
        firstName: String!
        lastName: String
        age: Int
    }

    input MovieMutation {
        name: String!
        year: Int
    }

    input UserInput {
        firstName: String!
        lastName: String
        age: Int
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;