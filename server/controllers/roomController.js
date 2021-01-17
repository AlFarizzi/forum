const models = require("../models");
const { Sequelize } = require("../models");
const op = Sequelize.Op;

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

const checkFollowRoom = async(userId,roomId) => {
    try {
        let result = await models.FollowingRoom.findOne({
            where: {
                userId,roomId
            }
        })
        return result
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
        let check = await checkFollowRoom(req.headers["identifier"],req.params.id)
        let result= {
            room,articles, check
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
        let result;
        let headers = req.headers["identifier"];
        if(headers === undefined) {
            result = await models.Room.findAll();
        } else {
            result = await models.FollowingRoom.findAll({
                where: {
                    userId:20
                }, include: ["rooms"]
            })
        }
        res.json(result);
    } catch (error) {
        throw error
    }
}

const followRoom = async(req,res) => {
    try {
        const {userId,roomId} = req.body;
        const check = await checkFollowRoom(userId,roomId);
        if(check === null) {
            let result = await models.FollowingRoom.create({
                userId,roomId
            })
            res.json(result);
        } else {
            res.json({
                status: 422,
                message: "Ruang Ini Sudah Kamu Ikuti"
            })
        }
    } catch (error) {
        throw error
    }
}

const unfollowRoom = async(req,res) => {
    try {   
        let result = await models.FollowingRoom.destroy({
            where: {
                [op.and] : {
                    userId: req.params.userId,
                    roomId:req.params.roomId
                }
            }
        })
        res.json(result);
    } catch (error) {
        throw error
    }
}

module.exports = {postRoom, ownerRoom, roomDetail, postRoomArticle, getRooms, followRoom,unfollowRoom}