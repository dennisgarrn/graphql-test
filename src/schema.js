import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Query {
        Author(id: Int!): Author
        Authors(limit: Int, sortField: String, sortOrder: String): [Author]
    }
    type Author {
        id: Int!
        name: String
        url: String
}
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
});
