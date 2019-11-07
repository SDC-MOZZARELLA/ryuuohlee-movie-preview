const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");
// const router = require("./routes/routes.js");
const controller = require('./routes/controllers.js');
const db = require('./database/mongo/index.js');

// middleware
app.use(cors());
app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes for mongoDB
app.get('/api/movie', (req, res) => {
  db.getPreview(req.body);
  res.sendStatus(200);
  // controller.movie.get(req, res, (err, data) => {
  //   if (err) {
  //     console.log('route err');
  //   }
  //   res.send(data.status(200));
  // });
});

app.post('/api/movie', (req, res) => {
  db.savePreview(req.body);
  res.sendStatus(201);
});

app.put('/api/movie', (req, res) => {
  db.modifyPreview(req.body);
  res.sendStatus(200);
});

app.delete('/api/movie', (req, res) => {
  db.deletePreview(req.body);
  res.sendStatus(200);
})

module.exports = app;
