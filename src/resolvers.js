export const resolvers = {
    Query: {
        test: () => 'Hello, World!!',
        greet: (root, { name }) => `Your name is ${name}`,
        forceGreet: (root, { name }) => `Your name is ${name}`
    }
};