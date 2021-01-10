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
                        res.json({
                            data:user,token:token
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
                status: "Akun Ini Tidak Terdaftar"
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

module.exports = {login,register}