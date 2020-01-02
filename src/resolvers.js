import { movies } from './assets';
import User from './models/User';

export const resolvers = {
    Query: {
        test: () => 'Hello, World!!',
        greet: (root, { name }, ctx) => `Greetings, ${ctx.test}`,
        forceGreet: (root, { name }) => `Your name is ${name}`,
        movies: () => movies,
        users: async () => await User.find()
    },
    Mutation: {
        createMovie: (_, { movie }) => {
            // Gets the higher id of the list and creates a new one from it
            const id = movies.sort((a, b) => b._id - a._id)[0]._id + 1;
            const newMovie = { ...movie, _id: id };
            movies.push(newMovie);
            return newMovie;
        },
        createUser: async (_, { user }) => {
            const newUser = new User(user);
            await newUser.save();
            return newUser;
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, input}) => {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};