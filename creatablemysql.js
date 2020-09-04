var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    datbase: 'testdb1'

})

connection.connect(function(err){
    (err)
    if (err) throw err
    console.log('Connection success');
    var sql = "create table testdb1.Person1(personid int, firstname varchar(255), lastname varchar(255), address varchar(255), city varchar(255))"
    connection.query(sql, function(err,result){
        (err)
        if(err) throw err
        console.log('table is created by person..')
    })
});