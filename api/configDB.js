require('dotenv').config()
const mysql = require('mysql');

// for connection to DB
const connection = mysql.createConnection({
	host: process.env.dbhost,
	user: process.env.dbuser,
	password: process.env.dbpassword,
	database: process.env.database,
});

module.exports = connection;
