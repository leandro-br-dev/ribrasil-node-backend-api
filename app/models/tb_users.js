'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TB_Users.init({
    cpf: DataTypes.STRING(11),
    password: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'TB_Users',
  });
  return TB_Users;
};