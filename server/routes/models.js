const db = require('../database/index.js');

module.exports = {
  movie: {
    get: (params, callback) => {
      db.Preview.find(params, (err, res) => {
        callback(err, res);
      });
    },
  },
};
