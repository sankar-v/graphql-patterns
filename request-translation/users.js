var{
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLString
  } = require('graphql/type');

  const database = require('./database.json')
const users = database.users;
var { AgendaUnion, AgendaFilter, agendaFilterResolve } = require ('./agenda-interface');

/**
 * User type
 */
const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
      _id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'User id',
      },
      name: {
        type: GraphQLString,
        description: 'User name',
      },
      agenda: {
        type: new GraphQLList(AgendaUnion),
        description: 'User Agenda',
        args: {
          filter: {
            name: 'UserAgendaFilter',
            type: AgendaFilter,
          },
        },
        resolve: (obj, args) => agendaFilterResolve(root, Object.assign({}, args, { userId: obj._id })),
      }
    })
  });

  const UserQuery = {
    type: new GraphQLList(UserType),
    args: {
      _id: {
        name: '_id',
        type: GraphQLInt,
      },
    },
    // Filter out the matching element from the source data array
    resolve: (root, { _id = null }) => _id ? users.filter(u => u._id === _id) : users,
  };
  
  module.exports = { UserQuery, UserType};