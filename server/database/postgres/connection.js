// requirements
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'jeffreylee', // process.env.POSTGRES_USER
  host: 'localhost', // process.env.POSTGRES_HOST
  database: 'movies', // process.env.POSTGRES_DATABASE
  password: '', // process.env.POSTGRES_PASSWORD
  port: 5432, // process.env.POSTGRES_PORT
});

pool.connect()
  .then(() => console.log('connected'))
  .catch(e => console.log(e))
  .finally(() => pool.end());

// routes
const getPreviews = (req, res) => {
  pool.query('SELECT')
}

module.exports = pool;
