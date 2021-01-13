'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RoomArticle.init({
    roomId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    article: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RoomArticle',
  });
  RoomArticle.associate = function(models) {
    RoomArticle.belongsTo(models.Room, {foreignKey: 'roomId', as: 'room'})
  }
  return RoomArticle;
};