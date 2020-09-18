var {
    GraphQLObjectType,
    GraphQLSchema,
} = require('graphql/type');

var  UserQuery = require('./users')
var QuoteQuery =  require('./quotes')
var agenda =  require('./agenda-interface')

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        users: UserQuery,
        agenda: agenda,
        quote: QuoteQuery
    },
});
module.export = new GraphQLSchema({
    query,
});