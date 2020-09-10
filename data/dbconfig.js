// imports
const knex = require("knex");
const knexfile = require("../knexfile");

// connects the .env to development mode in knexfile
const env = process.env.NODE_ENV || "development";
const configOptions = knexfile[env];

module.exports = knex(configOptions);
