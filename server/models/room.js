'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Room.init({
    roomName: DataTypes.STRING,
    roomOwnerId: DataTypes.INTEGER,
    roomDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  Room.associate = function(models) {
    Room.belongsTo(models.User, {foreignKey:"roomOwnerId", as:"owner"})
  }
  return Room;
};