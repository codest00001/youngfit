const bcrypt = require('bcrypt');
const User = require('../models/User');

// 회원가입 처리
exports.signup = async (req, res) => {
  try {
    const { name, email, password, level } = req.body;

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 생성
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      level: level || 'beginner', // 기본값 설정
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        level: newUser.level,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email or name is already in use' });
    } else {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
};
