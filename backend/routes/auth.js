import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = express.Router();
const SALT_ROUNDS = 10;

// REGISTER
router.post('/register', async (req, res) => {
  const { username, email, password, name, bio, profilePicture } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const result = await pool.query(
      `INSERT INTO Users (Username, Email, PasswordHash, Name, Bio, ProfilePicture)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING UserID, Username, Name, Bio, ProfilePicture`,
      [username, email, hashedPassword, name, bio, profilePicture]
    );
    const user = result.rows[0];
    const token = jwt.sign({ id: user.userid }, process.env.JWT_SECRET);
    res.json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'User registration failed. Username/email may already exist.' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM Users WHERE Username=$1', [username]);
    if (result.rows.length === 0) return res.status(400).json({ error: 'User not found' });
    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.passwordhash);
    if (!match) return res.status(400).json({ error: 'Wrong password' });
    const token = jwt.sign({ id: user.userid }, process.env.JWT_SECRET);
    res.json({ user: { UserID: user.userid, Username: user.username, Name: user.name, Bio: user.bio, ProfilePicture: user.profilepicture }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
