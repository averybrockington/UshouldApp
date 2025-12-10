CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Name VARCHAR(100),
    Bio TEXT,
    ProfilePicture VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE ReviewPosts (
    ReviewPostID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    Content TEXT NOT NULL,
    MediaType VARCHAR(20),
    MediaURL VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE Comments (
    CommentID SERIAL PRIMARY KEY,
    ReviewPostID INT NOT NULL,
    UserID INT NOT NULL,
    Content TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ReviewPostID) REFERENCES ReviewPosts(ReviewPostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE Likes (
    LikeID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    ReviewPostID INT,
    CommentID INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReviewPostID) REFERENCES ReviewPosts(ReviewPostID),
    FOREIGN KEY (CommentID) REFERENCES Comments(CommentID),
    CHECK (
        (ReviewPostID IS NOT NULL AND CommentID IS NULL) OR
        (ReviewPostID IS NULL AND CommentID IS NOT NULL)
    )
);
CREATE TABLE Friendships (
    FriendshipID SERIAL PRIMARY KEY,
    UserID1 INT NOT NULL,
    UserID2 INT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID1) REFERENCES Users(UserID),
    FOREIGN KEY (UserID2) REFERENCES Users(UserID)
);

CREATE TABLE Recommendations (
    RecommendationID SERIAL PRIMARY KEY,
    SenderID INT NOT NULL,
    ReceiverID INT NOT NULL,
    Content TEXT NOT NULL,
    MediaType VARCHAR(20),
    MediaURL VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);
CREATE INDEX idx_user_posts ON ReviewPosts (UserID);
CREATE INDEX idx_post_comments ON Comments (ReviewPostID);
CREATE INDEX idx_user_follows ON Follows (FollowingUserID);
CREATE INDEX idx_user_recs ON Recommendations (ReceiverID);

