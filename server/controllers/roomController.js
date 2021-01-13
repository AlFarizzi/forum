const models = require("../models")

const check = async(checkRoom) => {
    try {
        let result = await models.Room.findOne({
            where: {
                roomName: checkRoom
            }
        });
        return result;
    } catch (error) {
        throw error
    }
}

const postRoom = async (req,res) => {
    try {
        let result = await check(req.body.roomName)
        if(result !== null) {
            res.json({
                status: 422,
                message: "Unprocessable Entity"
            })
        } else {
            let result = await models.Room.create({
                roomName: req.body.roomName,
                roomOwnerId: req.body.ownerId
            })
            res.json(result)
        }
    } catch (error) {
        throw error
    }
}

const ownerRoom = async(req,res) => {
    try {
        let result = await models.User.findAll({include: ["rooms"]})
        res.json(result);
    } catch (error) {
        throw error;
    }
}

const roomDetail = async(req,res) => {
    try {
        let result = await models.Room.findOne({
            where: {
                id: req.params.id
            }, include: ["owner", "articles"]
        })
        res.json(result)
    } catch (error) {
        throw error
    }
}

const postRoomArticle = async(req,res) => {
    try {
        let result = await models.RoomArticle.create({
            roomId:req.body.roomId, authorId:req.body.authorId, article:req.body.article
        })
        res.json(result);
    } catch (error) {
        throw error        
    }
}

module.exports = {postRoom, ownerRoom, roomDetail, postRoomArticle}