const models = require("../models");
const { Sequelize } = require("../models");

const getArticles = async (req,res) => {
    try {
        let articles = await models.Article.findAll({order: Sequelize.literal("rand()"),include: ["author"]});
        res.json(articles);
    } catch (error) {
        throw error
    }
}

module.exports = {getArticles};