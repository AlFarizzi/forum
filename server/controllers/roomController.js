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
            result = {
                status: 422,
                message: "Unprocessable Entity"
            }
        } else {
            result = await models.Room.create({
                roomName: req.body.roomName,
                roomOwnerId: req.body.ownerId,
                roomDescription: req.body.description
            })
        }
        res.json(result)
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
        let room = await models.Room.findOne({
            where: {
                id: req.params.id
            }, include: ["owner",]
        })
        let articles = await models.RoomArticle.findAll({
            where: {
                roomId: req.params.id
            }, include:['author']
        })
        let result= {
            room,articles
        }
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

const getRooms = async(req,res) => {
    try {
        let result = await models.Room.findAll();
        res.json(result);
    } catch (error) {
        throw error
    }
}

module.exports = {postRoom, ownerRoom, roomDetail, postRoomArticle, getRooms}