const express = require("express");
const model = require("./models");
const {graphqlHTTP} = require("express-graphql");
const {GraphQLSchema} = require("graphql");
const {Root, RootMutation} = require("./graphql/query");
const app = new express();


const schema = new GraphQLSchema({
    query: Root,
    mutation: RootMutation
});

app.use("/graphql", graphqlHTTP({
    schema:schema,
    graphiql: true,
}))

app.listen(5000, () => {
    console.log("Server is Connected");
})