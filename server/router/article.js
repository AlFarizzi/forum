let express = require("express");
const { getArticles,postArticle } = require("../controllers/articleController");
let router = express.Router();

router.get('/', getArticles)
router.post('/post', postArticle)

module.exports = router;