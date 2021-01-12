const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require("../models");
const saltRounds = 10;
require("dotenv").config()


const check = async(username) => {
    try {
        let check = await models.User.findOne({
            where: {
                username:username
            }
        })
        return check
    } catch (error) {
        throw error
    }
}

const login = async (req,res) => {
   try {
        let user = await check(req.body.username);
        if(user) {
            bcrypt.compare(req.body.password,user.password, (err,result) => {
                if(result) {
                    jwt.sign(user.username,process.env.SECRET_TOKEN, (err,token) => {
                        if (err) throw err
                        jwt.sign(user.username,process.env.REFRESH_SECRET_TOKEN, (err,rToken) => {
                            if(err) throw err;
                            res.json({
                                data:user,token:token,rToken:rToken
                            })
                        })
                    })
                } else {
                    res.json({
                        message: "Username / Password Salah`"
                    })
                }
            })
        } else {
            res.json({
                message: "Akun Ini Tidak Terdaftar"
            })
        }
    } catch (error) {
       throw error;
   }
}

const register= async(req,res) => {
    try {
        let user = await check(req.body.username);
        if(!user) {
            let {name,username,password,passwordConfirmation} = req.body;
            if(password === passwordConfirmation) {
                bcrypt.hash(password,saltRounds, async(err,hash) => {
                    let user = await models.User.create({
                        name:name,username:username,password:hash
                    })
                    if(user) res.json({message: "Berhasil Registrasi", status:200})
                })
            } else {
                res.json({
                    message: "Password Tidak Sama",
                    status: 422
                })
            }
        } else {
            res.json({
                message: "Username Ini Sudah Terdaftar",
                status: 422
            })
        }
    } catch (error) {
        throw error
    }
}

const storeAuth = async(req,res) => {
    try {
        let response = await models.Authenticated.create({
            refresh_token: req.body.refresh_token,
            user_id: req.body.userId,
            name: req.body.name,
            username: req.body.username
        })
    } catch (error) {
        throw error
    }
}

const genToken = ({refresh_token,name}) => {
   let newSecretToken =  jwt.sign(name,process.env.SECRET_TOKEN)
    return newSecretToken
}

const newToken = async(req,res) => {
    try {
        const {token} = req.body;
        let check = await models.Authenticated.findOne({
            where:{
                refresh_token : token
            }
        })
        const getNewToken = await genToken(check);
        const newData = {...check.dataValues, token:getNewToken};
        setTimeout(() => {
            models.Authenticated.destroy({
                where: {refresh_token : token}
            })
        },3500);
        res.json(newData);
    } catch (error) {
        throw error;
    }
}

module.exports = {login,register, storeAuth, newToken}