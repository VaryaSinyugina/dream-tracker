const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false, 
  }
);

// Функция для подключения и синхронизации
async function initDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); 
  } catch (err) {
    console.error("Ошибка подключения к БД:", err);
    process.exit(1); 
  }
}

module.exports = { sequelize, initDB };