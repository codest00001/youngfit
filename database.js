const { Sequelize } = require('sequelize');

// PostgreSQL 연결 문자열
const sequelize = new Sequelize('postgres://postgres:admin1234!@localhost:5432/yfdb', {
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database was successful!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
