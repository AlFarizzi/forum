const model = require("../models");

const getArticles = () => {
   return model.Article.findAll()
}

const addArticle = async({authorId,title,article}) => {
    try {
        let res = await model.Article.create({
            authorId: authorId,
            title:title,
            article:article,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    } catch (error) {
        throw error
    }
}

module.exports = {getArticles, addArticle}