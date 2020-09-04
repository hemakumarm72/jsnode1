var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
 

})

connection.connect( function(err) {
    (err)
    if(err) throw err
    console.log('Connection database OK..!')
    connection.query("create database testdb1" ,function(err,result){
        (err)
        if(err) throw(err)
        console.log('creeate database success for testdb1')
    })
});