// 액세스 토큰을 검증하여 유효한 사용자인지 확인하는 미들웨어
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    let token;
    if (req.headers.authorization) {
        // "Bearer [토큰]"에서 토큰 부분만 추출
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }

    jwt.verify(token, 'access', (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Access token is invalid' });
        }
        req.user = user; // 인증된 사용자 정보를 요청 객체에 추가
        next();
    });
};

module.exports = {
    authenticate,
};
