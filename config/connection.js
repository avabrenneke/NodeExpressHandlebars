var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {            
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jtm9mv5398!",
    database: "burgers_db"
    });
};

connection.connect(function(err) {
  if (err) {
    console.error("ERROR: could not connect: " + err.stack);
    return;
  }
  console.log("connected with " + connection.threadId);
});
module.exports = connection;