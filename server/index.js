const express = require("express");
const app = express();
const cors = require("cors");
// const router = require("./routes/routes.js");
const controller = require('./routes/controllers.js');
const path = require("path");


// middleware
app.use(cors());
app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/api/movie', (req, res) => {
  controller.movie.get(req, res, (err, data) => {
    if (err) {
      console.log('route err');
    }
    res.send(data.status(200));
  });
});

module.exports = app;
