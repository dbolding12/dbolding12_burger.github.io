// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config()

let connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dbabzb08",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;