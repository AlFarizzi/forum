'use strict';
const faker = require("faker");
let articles = [];

for (let i = 0; i < 50; i++) {
  articles.push({
    authorId: Math.ceil(Math.random() * 16),
    title: faker.name.title(),
    article: faker.lorem.paragraphs(3),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles',articles, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Articles', null, {});

  }
};
