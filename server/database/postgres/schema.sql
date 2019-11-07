DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE moviePreviews (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  criticConsensus TEXT NOT NULL,
  videoUrl VARCHAR(60) NOT NULL,
  imgUrl VARCHAR(60) NOT NULL,
  videoScene VARCHAR(60) NOT NULL
);

CREATE TABLE audienceScore (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  percent INT,
  averageRating INT,
  totalCount INT
);

CREATE TABLE potatoeMeter (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  percent INT,
  averageRating INT,
  totalCount INT,
  fresh INT,
  spoiled INT
);

COPY moviePreviews FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/moviePreviews.csv' CSV HEADER;

COPY audienceScore FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/audienceScores.csv' CSV HEADER;

COPY potatoeMeter FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/potatoMeter.csv' CSV HEADER;

-- use psql postgres < schema.sql