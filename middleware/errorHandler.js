// 에러 처리 미들웨어
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: '서버에서 오류가 발생했습니다.' });
  };
  
  module.exports = errorHandler;
  