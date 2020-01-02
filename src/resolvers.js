import { movies } from './assets';

export const resolvers = {
    Query: {
        test: () => 'Hello, World!!',
        greet: (root, { name }) => `Your name is ${name}`,
        forceGreet: (root, { name }) => `Your name is ${name}`,
        movies: () => movies
    },
    Mutation: {
        createMovie: (_, { movie }) => {
            // Gets the higher id of the list and creates a new one from it
            const id = movies.sort((a, b) => b._id - a._id)[0]._id + 1;
            const newMovie = { ...movie, _id: id };
            movies.push(newMovie);
            return newMovie;
        } 
    }
};