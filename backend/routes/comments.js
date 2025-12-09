import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// CREATE COMMENT
router.post('/', authenticateToken, async (req, res) => {
  const { reviewPostID, content } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Comments (ReviewPostID, UserID, Content) VALUES ($1,$2,$3) RETURNING *`,
      [reviewPostID, req.user.id, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

// GET COMMENTS BY POST
router.get('/:postID', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM Comments WHERE ReviewPostID=$1 ORDER BY CreatedAt ASC`,
      [req.params.postID]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

export default router;
