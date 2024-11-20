'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'level', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'A1', // 기본값 'A1'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'level');
  }
};
