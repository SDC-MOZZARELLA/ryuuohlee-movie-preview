const models = require('./models.js');

module.exports = {
  movie: {
    get: (req, res) => {
      const params = req.query;
      models.movie.get(params, (err, results) => {
        if (err) {
          console.log('Movie not found');
        } else {
          res.json(results);
        }
      });
    },
  },
};
