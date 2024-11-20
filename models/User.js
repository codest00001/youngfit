module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      name: {
          type: DataTypes.STRING,
      },
      level: {
          type: DataTypes.STRING,
          allowNull: false,  
          defaultValue: "A1", // A1을 문자열로 수정
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW, // 기본값으로 현재 시간 사용
      },
  }, {
      tableName: 'users', // 테이블 이름 지정
      timestamps: true,  // createdAt, updatedAt 자동 관리
  });
  return User;
};
