const { Sequelize } = require('sequelize');

// PostgreSQL 연결 설정
const sequelize = new Sequelize('youngfit', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
