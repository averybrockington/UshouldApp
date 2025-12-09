import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// CREATE FRIENDSHIP
router.post('/', authenticateToken, async (req, res) => {
  const { userID2 } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Friendships (UserID1, UserID2) VALUES ($1,$2) RETURNING *`,
      [req.user.id, userID2]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create friendship' });
  }
});

// GET FRIENDS OF USER
router.get('/:userID', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT u.UserID, u.Username, u.Name FROM Friendships f
       JOIN Users u ON (f.UserID1=u.UserID OR f.UserID2=u.UserID)
       WHERE f.UserID1=$1 OR f.UserID2=$1`,
      [req.params.userID]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch friends' });
  }
});

export default router;
