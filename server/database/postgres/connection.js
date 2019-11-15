// requirements
require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jeffreylee', // process.env.POSTGRES_USER
  host: 'localhost', // process.env.POSTGRES_HOST
  database: 'movies', // process.env.POSTGRES_DATABASE
  password: '', // process.env.POSTGRES_PASSWORD
  port: 5432, // process.env.POSTGRES_PORT
});

pool.connect()
  .then(() => console.log('connected'))
  .catch(e => console.log(e));

// // routes
// const getPreview = (req, res) => {
//   let param = req.body.id;
//   pool.query(`SELECT moviePreviews.id, moviePreviews.title,moviePreviews.criticConsensus,moviePreviews.videoUrl,moviePreviews.imgUrl,moviePreviews.videoScene,audienceScore.audiencePercent,audienceScore.averageAudienceRating,audienceScore.audienceTotalCount,potatoMeter.potatoPercent,potatoMeter.averagePotatoRating,potatoMeter.potatoTotalCount,potatoMeter.fresh,potatoMeter.spoiled FROM moviePreviews INNER JOIN audienceScore ON moviePreviews.id = audienceScore.previewId INNER JOIN potatoMeter ON moviePreviews.id = potatoMeter.previewId
//   WHERE moviePreviews.id = ${param};`, (err, results) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(results);
//   });
// };

module.exports = pool;
