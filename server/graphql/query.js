const {UserType,ArticleType} = require("./objectType");
const {getUsers} = require("../controllers/userController");
const { getArticles, addArticle } = require("../controllers/articleController");
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull} = require("graphql");

let users;
getUsers()
.then(res => {
    users = res;
})
let articles;
getArticles()
.then(res => {
    articles = res
})

const Root = new GraphQLObjectType({
    name: "Query",
    description: "List Of Query",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return users;
            }
        },
        articles: {
            type: new GraphQLList(ArticleType),
            resolve: () => {
                return articles
            }
        }
    })
})

const RootMutation= new GraphQLObjectType({
    name: "Mutation",
    description: "List Of Mutation",
    fields: () => ({
        addArticle: {
            type: GraphQLString,
            args: {
                authorId: {type: new GraphQLNonNull(GraphQLInt)},
                title: {type: new GraphQLNonNull(GraphQLString)},
                article: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent,args) => {
                addArticle(args);
                return "Artikel Berhasil Di Posting"
            }
        }
    })
})

module.exports = {Root, RootMutation};