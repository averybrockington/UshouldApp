import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// SEND RECOMMENDATION
router.post('/', authenticateToken, async (req, res) => {
  const { receiverID, content, mediaType, mediaURL } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Recommendations (SenderID, ReceiverID, Content, MediaType, MediaURL)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [req.user.id, receiverID, content, mediaType, mediaURL]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send recommendation' });
  }
});

// GET RECOMMENDATIONS FOR USER
router.get('/:userID', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT r.*, u.Username as senderName FROM Recommendations r
       JOIN Users u ON r.SenderID = u.UserID
       WHERE ReceiverID=$1 ORDER BY CreatedAt DESC`,
      [req.params.userID]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

export default router;
