const knex = require('knex');

const knexfile = require('../knexfile')

const environment = process.env.DB_ENV || 'development';

const knexConfig = knexfile[environment];

// const knexConfig = {
    // client: 'sqlite3',//db driver
    // connection: {//could be an object or string
    //   filename: './data/produce.db3'
    // },
    // useNullAsDefault: true//needed for SQLite
//   };
  
//   const db = knex(knexConfig);//db represents a live connection to the database
  
module.exports = knex(knexConfig)