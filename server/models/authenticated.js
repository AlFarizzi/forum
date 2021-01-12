'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authenticated extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Authenticated.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    refresh_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authenticated',
  });
  return Authenticated;
};