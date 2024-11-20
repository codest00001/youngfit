const { User } = require('../models');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// 모든 사용자 조회
exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users.' });
    }
};

// 사용자 생성
exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name, level } = req.body;
    try {
        const user = await User.create({ email, password, name, level });

        // 사용자 생성 시 JWT 토큰 발급
        const token = jwt.sign(
            { id: user.id, email: user.email }, // 토큰에 포함할 정보
            'access', // 비밀키
            { expiresIn: '1h' } // 토큰 만료 시간
        );

        res.status(201).json({ user, token });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user.' });
    }
};
