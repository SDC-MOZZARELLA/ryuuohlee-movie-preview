# CRUD API

## CREATE ---> /api/movie (POST)
This is a POST request to /api/movie with a proper JSON format:
{
  title: String,
  criticConsensus: String,
  potatoMeter: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number,
    fresh: Number,
    spoiled: Number
  },
  audienceScore: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number
  },
  videoUrl: String,
  imgUrl: String,
  videoScene: String
}
that saves a new Preview document to the database.

## READ ---> /api/movie (GET)
This is a GET request to /api/movie with a proper JSON format { _id: Number } that retrieves a document by the id number.

## MODIFY ---> /api/movie (PUT)
This is a PUT request to /api/movie with a proper JSON format { _id: Number, title: String} that updates a movie title when used.

## DELETE ---> /api/movie (DELETE)
This is a DELETE request to /api/movie with a proper JSON format { _id: Number } that deletes a document from the database.