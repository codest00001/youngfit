const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// 회원가입 엔드포인트
router.post('/register', registerUser);

module.exports = router;
