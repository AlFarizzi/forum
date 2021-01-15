let express = require("express");
const { postRoom,ownerRoom,roomDetail, postRoomArticle,getRooms } = require("../controllers/roomController");
let router = express.Router();

router.get('/rooms', getRooms)
router.post("/rooms", postRoom)
router.post('/rooms/article/post',postRoomArticle)
router.get("/rooms/owner", ownerRoom);
router.get('/rooms/:id', roomDetail)

module.exports = router;