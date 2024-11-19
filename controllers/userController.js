const User = require('../models/User');

// 회원가입 로직
exports.registerUser = async (req, res, next) => {
  const { nickname, email, password } = req.body;

  try {
    // 이메일과 닉네임 중복 체크
    const existingUser = await User.findOne({
      where: { email },
    });
    const existingNickname = await User.findOne({
      where: { nickname },
    });

    if (existingUser) {
      return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
    }

    if (existingNickname) {
      return res.status(400).json({ message: '이미 사용 중인 닉네임입니다.' });
    }

    // 새로운 사용자 생성
    const newUser = await User.create({ nickname, email, password });
    res.status(201).json({
      message: '회원가입이 성공적으로 완료되었습니다.',
      user: {
        id: newUser.id,
        nickname: newUser.nickname,
        email: newUser.email,
        level: newUser.level,
        joinedAt: newUser.joinedAt,
      },
    });
  } catch (error) {
    next(error); // 에러 미들웨어로 전달
  }
};
