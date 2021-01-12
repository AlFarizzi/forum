let express = require("express");
const { getArticles } = require("../controllers/articleController");
let router = express.Router();

router.get('/', getArticles)

module.exports = router;