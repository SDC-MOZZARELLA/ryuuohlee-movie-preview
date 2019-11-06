const db = require('../database/mongo/index.js');

module.exports = {
  movie: {
    get: (params, callback) => {
      db.Preview.find(params, (err, res) => {
        callback(err, res);
      });
    },
  },
};
