const express = require('express');
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const { authenticate } = require('../middleware/authMiddleware'); // 미들웨어 가져오기

const router = express.Router();

// 모든 사용자 조회 (GET /users) - 인증 필요
router.get('/', authenticate, userController.findAll);

// 사용자 생성 (POST /users) - 인증 불필요
router.post(
    '/',
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('email')
            .notEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Invalid email format'),
        check('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
    ],
    userController.createUser
);

module.exports = router;
