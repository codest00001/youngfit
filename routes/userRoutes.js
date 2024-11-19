const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // 컨트롤러 임포트

// 회원가입 API
router.post('/signup', userController.signup);

module.exports = router;
