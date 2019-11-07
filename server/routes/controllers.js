const models = require('./models.js');

module.exports = {
  movie: {
    get: (req, res) => {
      console.log(req)
      const params = req.body;
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
