import pg from "pg";
import env from "dotenv";
env.config();
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "DCV",
  password: process.env.PASSWORD,
  port: 5432,
});
export default db;
