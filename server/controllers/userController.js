const model = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let users;

// const addUser = async(check, {name,username,password,passwordConfirmation}) => {
//     try {
//         console.log(check);
//         if(check !== undefined) {
//             return false
//         } else {
//             if(password === passwordConfirmation ) {
//                 bcrypt.hash(password, saltRounds, (err,hash) => {
//                     model.User.create({
//                         name: name,
//                         username: username,
//                         password: hash
//                     })
//                 })
//                 return true;
//             }
//         }
//     } catch (error) {
//         throw error
//     }
// }

const getUsers = () => {
    return model.User.findAll();
}
module.exports = {getUsers}