// Set up MySQL connection.
var mysql = require("mysql");
var connection

if (process.argv.JAWSDB_URL) {
  connection = mysql.createConnection(process.argv.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gwen!1987",
    database: "burgers_db"
  });
}

// Export connection for our ORM to use.
module.exports = connection;
