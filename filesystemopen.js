var fs = require('fs');

fs.open('emptyfile.txt','w' ,function(err, file) {
    (err);
    if (err) throw err
    console.log('Created Empty files');

})