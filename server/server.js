const express = require("express");
const model = require("./models");
const {graphqlHTTP} = require("express-graphql");
const {GraphQLSchema} = require("graphql");
const {Root, RootMutation} = require("./graphql/query");
const app = new express();
const cors = require("cors");

const schema = new GraphQLSchema({
    query: Root,
    mutation: RootMutation
});

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}));

app.use("/graphql", graphqlHTTP({
    schema:schema,
    graphiql: true,
}))

app.listen(5000, () => {
    console.log("Server is Connected");
})