import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import pool from './db.js';


const app = express();
app.use(cors(
    { origin: '*' }
));
app.use(express.json());

// Routes
import authRoutes from './routes/auth.js';
import reviewRoutes from './routes/reviews.js';
import commentRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';
import friendshipRoutes from './routes/friendships.js';
import recommendationRoutes from './routes/recommendations.js';

app.use('/auth', authRoutes);
app.use('/reviews', reviewRoutes);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);
app.use('/friendships', friendshipRoutes);
app.use('/recommendations', recommendationRoutes);

app.get('/', (req, res) => res.send('Backend is running'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
