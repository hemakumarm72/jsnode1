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
    var sql =  "insert into Person1 (personid, firstname, lastname, address, city) values ?";
    var values = [
        ['233', 'Chaal', 'CTO', '', ''],
        ['23', 'Pritam', 'Android Developer', '', ''],
        ['234234' , 'Venkatesh', 'Frontend Developer', '', ''],
        ['234234', 'Niranjan', 'Backend Developer', '', '']
    ];
    connection.query(sql, [values],function(err, result){
        if (err) throw err
       
        console.log('Insert successful'+ result.affectedRows + ","+ result.insertId);
    })
});


