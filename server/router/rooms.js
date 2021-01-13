let express = require("express");
const { postRoom } = require("../controllers/roomController");
let router = express.Router();

router.post("/rooms", postRoom)

module.exports = router;