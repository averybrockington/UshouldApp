import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// CREATE LIKE
router.post('/', authenticateToken, async (req, res) => {
  const { reviewPostID, commentID } = req.body;
  if ((reviewPostID && commentID) || (!reviewPostID && !commentID)) {
    return res.status(400).json({ error: 'Must like either a post or comment, not both.' });
  }
  try {
    const result = await pool.query(
      `INSERT INTO Likes (UserID, ReviewPostID, CommentID) VALUES ($1,$2,$3) RETURNING *`,
      [req.user.id, reviewPostID || null, commentID || null]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to like' });
  }
});

// GET LIKES FOR POST
router.get('/post/:postID', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM Likes WHERE ReviewPostID=$1`,
      [req.params.postID]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch likes' });
  }
});

// GET LIKES FOR COMMENT
router.get('/comment/:commentID', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM Likes WHERE CommentID=$1`,
      [req.params.commentID]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch likes' });
  }
});

export default router;
