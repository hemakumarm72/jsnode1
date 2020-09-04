var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'testdb1',
    password:''
})

connection.connect(function(err){
    (err)
    if (err) throw err
    console.log('connect database successful')
    var sql =  "insert into Person1 values(1, 'Hema', 'kumar', 'sathiya nagar 21 street', 'Arcot')"
    connection.query(sql,function(err, result){
        if (err) throw err
       
        console.log('Insert successful'+ result.affectedRows + ","+ result.insertId);
    })
});


