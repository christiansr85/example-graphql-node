import express from 'express';
import GraphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/graphql', GraphqlHTTP({
    graphiql: true,
    schema: schema
}));

// Default endpoint for root url
app.get('/', (req, res) => res.json({ msg: 'Root of the server!' }));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}!!!`);
});