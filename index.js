import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import rootSchema from './request-translation/app';

const users = require('./request-translation/rest/users');
const quotes = require('./request-translation/rest/quotes');

const app = express();

// REST endpoints:
app.use('/quotes', quotes);
app.use('/users', users);

// GraphQL endpoint:
app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
}));

app.listen(4000);

console.log('Running GraphQL + REST API Gateway at http://localhost:4000/graphql');

//https://github.com/fireproofsocks/graphql-example/blob/master/index.js