var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jtm9mv5398!",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("ERROR: could not connect: " + err.stack);
    return;
  }
  console.log("connected with " + connection.threadId);
});
module.exports = connection;