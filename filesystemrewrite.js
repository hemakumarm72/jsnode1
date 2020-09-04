var fs = require('fs')
fs.writeFile('rewrite.txt', 'Hello worlds', function(err){
    console.log('saved data');

});

    // replace the above file contents

fs.writeFile('rewrite.txt', 'Hello worlds replace name', function(err) {
    console.log('rewrite data');
});
