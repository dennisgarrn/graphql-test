import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    return response.json({
        msg: 'GraphQl endpoint /graphql'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
})
