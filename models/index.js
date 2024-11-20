const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('yfdb', 'postgres', 'admin1234!', {
    host: 'localhost',
    dialect: 'postgres',
});

// 모든 모델을 가져와 초기화
const User = require('./user')(sequelize, DataTypes);

// 필요한 모델을 객체로 내보내기
module.exports = { sequelize, User };
