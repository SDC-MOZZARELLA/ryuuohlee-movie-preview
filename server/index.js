require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');

// const path = require("path");
// const router = require("./routes/routes.js");
// const controller = require('./routes/controllers.js');
// const db = require('./database/mongo/index.js');
const pool = require('./database/postgres/connection.js');

const app = express();
const cors = require("cors");

// middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));

// routes for mongoDB
// app.get('/api/movie', (req, res) => {
//   pg.getPreview(req);
//   res.sendStatus(200);

// db.getPreview(req.body);
  // res.sendStatus(200);
  // controller.movie.get(req, res, (err, data) => {
  //   if (err) {
  //     console.log('route err');
  //   }
  //   res.send(data.status(200));
  // });
// });

// app.post('/api/movie', (req, res) => {
//   db.savePreview(req.body);
//   res.sendStatus(201);
// });

// app.put('/api/movie', (req, res) => {
//   db.modifyPreview(req.body);
//   res.sendStatus(200);
// });

// app.delete('/api/movie', (req, res) => {
//   db.deletePreview(req.body);
//   res.sendStatus(200);
// })

// Postgres API

app.get('/api/movies', (req, res) => {
  // pg.getPreview(req);
  // res.status(200).json();

  pool.query(`SELECT moviePreviews.id, moviePreviews.title,moviePreviews.criticConsensus,moviePreviews.videoUrl,moviePreviews.imgUrl,moviePreviews.videoScene,audienceScore.audiencePercent,audienceScore.averageAudienceRating,audienceScore.audienceTotalCount,potatoMeter.potatoPercent,potatoMeter.averagePotatoRating,potatoMeter.potatoTotalCount,potatoMeter.fresh,potatoMeter.spoiled FROM moviePreviews INNER JOIN audienceScore ON moviePreviews.id = audienceScore.previewId INNER JOIN potatoMeter ON moviePreviews.id = potatoMeter.previewId
  WHERE moviePreviews.id = ${req.query.id};`, (err, results) => {
    if (err) {
      console.log(err);
    }
    // console.log(results);
    res.status(200).json(results)
  });
});
module.exports = app;
