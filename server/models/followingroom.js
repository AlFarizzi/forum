'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FollowingRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FollowingRoom.init({
    userId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FollowingRoom',
  });
  FollowingRoom.associate = function(models) {
    FollowingRoom.belongsTo(models.Room, {foreignKey:'roomId', as:"rooms"})
  }
  return FollowingRoom;
};