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

-- use cqlsh < keyspace.cql