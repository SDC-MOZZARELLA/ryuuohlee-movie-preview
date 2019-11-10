DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE moviePreviews (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  criticConsensus TEXT NOT NULL
);

CREATE TABLE audienceScore (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  percent INT,
  averageRating float(2),
  totalCount INT
);

CREATE TABLE potatoeMeter (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  percent INT,
  averageRating float,
  totalCount INT,
  fresh INT,
  spoiled INT
);

CREATE TABLE media (
  id INT PRIMARY KEY,
  videoUrl TEXT,
  imgUrl TEXT,
  videoScene TEXT
);

COPY moviePreviews FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/moviePreviews.csv' CSV HEADER;

COPY audienceScore FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/audienceScores.csv' CSV HEADER;

COPY potatoeMeter FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/potatoMeter.csv' CSV HEADER;

COPY media FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/media.csv' CSV HEADER;

-- use psql postgres < schema.sql