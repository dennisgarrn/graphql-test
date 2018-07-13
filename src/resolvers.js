const authors = [
    { id: 10, username: 'johndoe', first_name: 'John', last_name: 'Doe', avatar_url: 'acme.com/avatars/10' },
    { id: 11, username: 'janedoe', first_name: 'Jane', last_name: 'Doe', avatar_url: 'acme.com/avatars/11' },
];

export const resolvers = {
    Query: {
        Author: (_, { id }) => authors.find(author => author.id === id),
        Authors: () => authors,
    },
    Author: {
        id: author => author.id,
        name: author => author.username,
        url: author => author.avatar_url
    }
}
