const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shashi@123",
  database: "javascript",
});

module.exports = connection;
