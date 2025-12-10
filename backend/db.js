// backend/db.js
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

// Ensure DATABASE_URL exists
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in your .env");
}

// Create a Pool instance
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // CleverCloud requires SSL, allow self-signed certs
  },
});

// Optional: test the connection on startup
pool.connect()
  .then(client => {
    console.log("Connected to PostgreSQL via Pool!");
    client.release(); // release client back to pool
  })
  .catch(err => console.error("PostgreSQL connection error:", err));

export default pool;
