var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'testdb1',
    password:''

})

connection.connect(function(err){
    (err)
    if(err) throw err
    console.log('connect database ok');

    var sql = 'select * from Person1'
    connection.query(sql, function(err,result){
        (err)
        if(err) throw err
        console.log('selected database');
        
        console.log(result);
    })
})