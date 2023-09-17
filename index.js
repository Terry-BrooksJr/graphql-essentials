import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const API = express();
const PORT = 10001
API.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { product: () => {
    return {
        "id":23,
        "name": "Thingy",
        "desc":"Stuff",
        "price": 423.32,
        "sold_outd": True
    }
}};

API.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

API.listen(PORT, () => console.log(`Running server on port http://localhost:${PORT}/graphql`) );