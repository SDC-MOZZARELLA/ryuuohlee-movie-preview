DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE moviePreviews (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(30) UNIQUE NOT NULL,
  criticConsensus VARCHAR(255) NOT NULL,
  videoUrl VARCHAR(60) NOT NULL,
  imgUrl VARCHAR(60) NOT NULL,
  videoScene VARCHAR(60) NOT NULL
);

CREATE TABLE audienceScore (
  id SERIAL,
  percent INT,
  averageRating INT,
  totalCount INT
);

CREATE TABLE potatoeMeter (
  id SERIAL,
  percent INT,
  averageRating INT,
  totalCount INT,
  fresh INT,
  spoiled INT
);

-- use psql postgres < schema.sql