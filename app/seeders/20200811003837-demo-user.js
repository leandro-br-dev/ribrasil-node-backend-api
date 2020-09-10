'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('TB_Users', [
    {
       cpf: '34570109861',
       password: "1234567890",
       createdAt: new Date(),
       updatedAt: new Date()
     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('TB_Users', null, {});

  }
};
