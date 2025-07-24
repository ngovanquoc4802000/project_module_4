import { Pool } from "pg";

console.log("process.env.DB_PORT", process.env.DB_PORT);

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "foody",
});

export default pool;
