const express = require("express");
const sequelize = require("./config/db");
require("dotenv").config();
const authMiddleware = require("./middleware/auth");

const User = require("./models/User");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// тестовый маршрут
app.get("/", (req, res) => {
  res.send("Hello from backend + PostgreSQL!");
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  initDB().then(() => {
    app.listen(PORT, () => {
      console.log('Server running on http://localhost:${PORT}');
    });
  });
}
