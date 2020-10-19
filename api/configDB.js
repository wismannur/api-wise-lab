require('dotenv').config()
const mysql = require('mysql');

// for connection to DB
const connection = mysql.createConnection({
	host: process.env.DBHOST,
	user: process.env.DBUSER,
	password: process.env.DBPASSWORD,
	database: process.env.DATABASE,
});

module.exports = connection;
