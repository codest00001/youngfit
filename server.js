const http = require('http');
const app = require('./app');
const { sequelize } = require('./models'); // Sequelize 연결

// 환경 변수
const PORT = process.env.PORT || 3000;

// 데이터베이스 연결 확인 및 서버 시작
const startServer = async () => {
    try {
        // Sequelize 연결 확인
        await sequelize.authenticate();
        console.log('Connection to the database was successful!');

        // 데이터베이스 동기화 (필요한 경우)
        await sequelize.sync({ alter: true }); // 변경된 테이블 구조 반영 (주의: 실제 환경에서는 신중히 사용)

        // 서버 실행
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // 오류 시 프로세스 종료
    }
};

// 서버 시작
startServer();
