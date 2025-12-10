const API_BASE = "http://localhost:8080"; // Change to your deployed backend URL

/* ----------------- AUTH ----------------- */
export const registerUser = async ({ username, password, name }) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, name }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Registration failed");
  }

  return res.json();
};

export const loginUser = async ({ username, password }) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Login failed");
  }

  return res.json();
};

/* ----------------- REVIEWS ----------------- */
export const getReviews = async () => {
  const res = await fetch(`${API_BASE}/reviews`);
  return res.json();
};

export const getReviewById = async (id) => {
  const res = await fetch(`${API_BASE}/reviews/${id}`);
  return res.json();
};

export const createReview = async ({ userId, content, mediaType, mediaURL }) => {
  const res = await fetch(`${API_BASE}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, content, mediaType, mediaURL }),
  });
  return res.json();
};

/* ----------------- COMMENTS ----------------- */
export const getCommentsByPost = async (postId) => {
  const res = await fetch(`${API_BASE}/comments/post/${postId}`);
  return res.json();
};

export const createComment = async ({ postId, userId, content }) => {
  const res = await fetch(`${API_BASE}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, userId, content }),
  });
  return res.json();
};

/* ----------------- LIKES ----------------- */
export const likePost = async ({ userId, reviewPostId }) => {
  const res = await fetch(`${API_BASE}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, reviewPostId }),
  });
  return res.json();
};

/* ----------------- FRIENDSHIPS ----------------- */
export const addFriend = async ({ userId1, userId2 }) => {
  const res = await fetch(`${API_BASE}/friendships`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId1, userId2 }),
  });
  return res.json();
};

/* ----------------- RECOMMENDATIONS ----------------- */
export const getRecommendations = async (userId) => {
  const res = await fetch(`${API_BASE}/recommendations/${userId}`);
  return res.json();
};

export const sendRecommendation = async ({ senderId, receiverId, content, mediaType, mediaURL }) => {
  const res = await fetch(`${API_BASE}/recommendations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ senderId, receiverId, content, mediaType, mediaURL }),
  });
  return res.json();
};
