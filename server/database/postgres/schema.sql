DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE moviePreviews (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  criticConsensus TEXT NOT NULL,
  videoUrl TEXT,
  imgUrl TEXT,
  videoScene TEXT
);

CREATE TABLE audienceScore (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  audiencePercent INT,
  averageAudienceRating float(2),
  audienceTotalCount INT
);

CREATE TABLE potatoMeter (
  id INT PRIMARY KEY,
  previewId INT REFERENCES moviePreviews(id),
  potatoPercent INT,
  averagePotatoRating float,
  potatoTotalCount INT,
  fresh INT,
  spoiled INT
);

COPY moviePreviews FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/moviePreviews.csv' CSV HEADER;

COPY audienceScore FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/audienceScores.csv' CSV HEADER;

COPY potatoMeter FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/potatoMeter.csv' CSV HEADER;

-- use psql postgres < schema.sql