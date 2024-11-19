const express = require('express');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// JSON 파싱 미들웨어
app.use(express.json());

// 라우터
app.use('/users', userRoutes);

// 에러 처리 미들웨어
app.use(errorHandler);

// 데이터베이스 연결 및 서버 시작
(async () => {
  try {
    await sequelize.authenticate();
    console.log('데이터베이스 연결 성공');
    await sequelize.sync(); // 데이터베이스 테이블 생성
    app.listen(PORT, () => console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`));
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
  }
})();
