const express = require("express");
const sequelize = require("./config/db");
require("dotenv").config();
const authMiddleware = require("./middleware/auth");

const User = require("./models/User");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


// проверка БД + синхронизация моделей
sequelize.authenticate()
  .then(() => {
    console.log("Подключение к БД успешно");
    return sequelize.sync({ alter: true }); // создаст/обновит таблицы
  })
  .then(() => console.log("Таблицы синхронизированы"))
  .catch((err) => console.error("Ошибка подключения к БД:", err));

// тестовый маршрут
app.get("/", (req, res) => {
  res.send("Hello from backend + PostgreSQL!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
