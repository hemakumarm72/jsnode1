var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'testdb1'

})

connection.connect(function(err) {
    (err)
    if(err) throw err
    console.log('created successfully')
    var database_sel = 'use testdb1'
    connection.query(database_sel, function(err, result) {
        (err)
        if(err) throw err
        console.log('Database select')
      var sql = 'ALTER TABLE Person ADD COLUMN personid3 int'
      connection.query(sql, function(err, result) {
          (err)
          if (err) throw err
          console.log('add new column table for personid')


      })
    })
});