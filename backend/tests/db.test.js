const { sequelize } = require("../src/config/db");

describe("Database connection", () => {
  it("Подлкючение к БД", async () => {
    await expect(sequelize.authenticate()).resolves.not.toThrow();
  });
});