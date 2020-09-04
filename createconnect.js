// Friday, August 25, 2017 05:28:00 PM

var mysql = require('mysql');

// Creating a connection to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

connection.connect(function(err) {
    (err)
    if (err) throw err;
    console.log("Connected to the database!");
  // Querying the connected database
  // connection.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Queried result : " + result);
  // });
});