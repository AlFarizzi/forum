let express = require("express");
const {search} = require("../controllers/searchController")
let router = express.Router();

router.get('/search/:key', search )

module.exports = router;