const express = require("express");
const model = require("./models");
const {graphqlHTTP} = require("express-graphql");
const {GraphQLSchema} = require("graphql");
const {Root, RootMutation} = require("./graphql/query");
const app = new express();
const cors = require("cors");
const {login, register} = require("./controllers/authentication");
const bodyParser = require("body-parser")

const schema = new GraphQLSchema({
    query: Root,
    mutation: RootMutation
});

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.post("/login", login);
app.post('/register',register)

const tes = (req,res,next) => {
    console.log("asd");
    next()
}

app.use("/graphql",tes, graphqlHTTP({
    schema:schema,
    graphiql: true,
}))

app.listen(5000, () => {
    console.log("Server is Connected");
})