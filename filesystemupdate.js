var fs = require('fs');



fs.writeFile('updatefile.txt', 'Hello world', function(err){
    (err)
    if (err) throw err
    console.log('write data')
});

fs.appendFile('updatefile.txt', 'Update extract file\n',function(err) {
    (err)
    if (err) throw err
    console.log('append line');
});