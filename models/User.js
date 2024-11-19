const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // 이메일 중복 방지
    validate: {
      isEmail: true, // 이메일 형식 검증
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    defaultValue: 'AA', // 기본값 설정
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

// 테이블 동기화 (이 부분은 개발 환경에서만 사용하는 것이 좋습니다)
sequelize.sync();

module.exports = User;
