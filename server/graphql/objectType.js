
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull} = require("graphql");
const {addUser,getUsers} = require("../controllers/userController");
const { getArticles, addArticle } = require("../controllers/articleController");

let users;
let articles;

getUsers()
.then(res => users = res)
getArticles()
.then(res => articles = res)

const UserType = new GraphQLObjectType({
    name: "Users",
    fields: () => ({
        id: {type:new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        articles: {
            type: new GraphQLList(ArticleType),
            resolve: (parent) => {
                return articles.filter(article => article.authorId === parent.id);
            }
        }
    }),
})

const ArticleType = new GraphQLObjectType({
    name: "Articles",
    fields: () => ({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        article: {type: GraphQLString},
        authorId: {type: GraphQLInt},
        author: {
            type:UserType,
            resolve: (parent) => {
                return users.find(user => user.id === parent.authorId)
            }
        }
    })
})

module.exports = {UserType,ArticleType}