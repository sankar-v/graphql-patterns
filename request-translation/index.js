var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const { rootSchema } = require('./app');

const users = require('./rest/users');
const quotes = require('./rest/quotes');

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