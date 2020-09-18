var {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} = require('graphql/type');

var { getQuote } = require('./micro-services/quote');

/**
 * GraphQL Quote type
 */
const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    description: 'Quote of the day from API service',
    fields: () => ({
        id: {
            type: GraphQLString,
            description: 'Quote id',
        },
        quote: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The text of the quote',
        },
        author: {
            type: GraphQLString,
            description: 'The person to whom the quote is attributed',
        },
        date: {
            type: GraphQLString,
            description: 'Date in YYYY-MM-DD format',
        }
    })
});

module.exports =  {
    type: QuoteType,
    resolve: getQuote
}