import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.PG_DB!,
  process.env.PG_USER!,
  process.env.PG_PASSWORD!,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
    sync: { force: false },
  }
);

export default sequelize;
