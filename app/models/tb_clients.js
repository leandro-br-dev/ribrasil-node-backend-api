'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TB_Clients.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING(11),
    dataNascimento: DataTypes.DATEONLY,
    endereco: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TB_Clients',
  });
  return TB_Clients;
};