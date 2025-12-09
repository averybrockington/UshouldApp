import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// CREATE POST
router.post('/', authenticateToken, async (req, res) => {
  const { content, mediaType, mediaURL } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO ReviewPosts (UserID, Content, MediaType, MediaURL)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [req.user.id, content, mediaType, mediaURL]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM ReviewPosts ORDER BY CreatedAt DESC`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;
