const express = require('express');
const userRoutes = require('./routes/userRoutes'); // User 라우터 가져오기
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// 환경 변수 설정 로드
dotenv.config();

const app = express();

// 미들웨어
app.use(bodyParser.json()); // JSON 요청을 파싱
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 설정
app.use('/users', userRoutes); // '/users' 경로와 관련된 요청은 userRoutes로 처리

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Welcome to the User API!');
});

// 404 핸들러
app.use((req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

// 에러 핸들러
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
