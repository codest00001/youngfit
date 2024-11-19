// server.js
const express = require('express');
const User = require('./models/User'); // User 모델 가져오기

const app = express();
const port = 3000;

// 미들웨어
app.use(express.json()); // JSON 요청 본문을 파싱

// 간단한 라우팅 예시
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
