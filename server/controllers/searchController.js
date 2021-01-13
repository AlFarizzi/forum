const models = require("../models");
const { sequelize, Sequelize } = require("../models");
const op = Sequelize.Op;
const search = async (req,res) => {
    try {
        let result = await models.Article.findAll({
            where: {
                article: {
                    [op.like]: `%${req.params.key}%`
                }
            }
        })
        res.json(result)
    } catch (error) {
        throw error
    }
}

module.exports = {search}