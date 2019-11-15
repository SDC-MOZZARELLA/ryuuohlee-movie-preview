-- DROP KEYSPACE IF EXISTS movies;
CREATE KEYSPACE movies
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE movies;

CREATE TABLE moviePreviews (
  id INT PRIMARY KEY,
  title VARCHAR,
  criticConsensus VARCHAR,
  videoUrl VARCHAR,
  imgUrl VARCHAR,
  videoScene VARCHAR
);

CREATE TABLE audienceScore (
  id INT PRIMARY KEY,
  previewId INT,
  percent INT,
  averageRating INT,
  totalCount INT
);

CREATE TABLE potatoeMeter (
  id INT PRIMARY KEY,
  previewId INT,
  percent INT,
  averageRating INT,
  totalCount INT,
  fresh INT,
  spoiled INT
);

COPY movies.moviePreviews FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/moviePreviews.csv' WITH HEADER=TRUE;

COPY movies.audienceScore FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/audienceScores.csv' WITH HEADER=TRUE;

COPY movies.potatoeMeter FROM '/Users/jeffreylee/hackreactor/Immersive/movie-preview/server/database/seed/potatoMeter.csv' WITH HEADER=TRUE;

-- use cqlsh < keyspace.cql