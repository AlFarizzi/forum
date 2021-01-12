 
'use strict';
const faker = require("faker");
const bcrypt = require("bcrypt");
const users = [];

for (let i = 0; i < 15; i++) {
  users.push({
    name: faker.name.findName(),
    username: faker.internet.userName(),
    password: "$2b$10$guzhlnv44qbiT94jM3J9OOfb5Wuu3rYTJOTnegN1UTbgckWHzYSQ6",
    createdAt: new Date(),
    updatedAt: new Date()
  })  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};