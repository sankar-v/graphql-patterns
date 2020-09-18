import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql/type';

import userQuery from './users';
import agendaQuery from './agenda-interface';
import quoteQuery from './quote';

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        users: UserQuery,
        agenda: agenda,
        quote: QuoteQuery
    },
});
export default new GraphQLSchema({
    query,
});