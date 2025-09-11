const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Регистрация
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // проверяем, есть ли пользователь
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Такой email уже используется" });
    }

    // хэшируем пароль
    const passwordHash = await bcrypt.hash(password, 10);

    // создаём пользователя
    const newUser = await User.create({ username, email, passwordHash });
    res.json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Авторизация 
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // ищем пользователя
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "Неверный email или пароль" });

    // проверяем пароль
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) return res.status(400).json({ error: "Неверный email или пароль" });

    // создаём JWT токен
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
