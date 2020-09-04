var fs = require('fs')
fs.writeFile('rename.txt', 'Hello World', function(err) {
    console.log("Saved data");
})

fs.rename('rename.txt', 'modified.txt', function(err){
    console.log('rename successfully');
})
