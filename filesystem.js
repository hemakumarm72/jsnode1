var cre = require('fs');
cre.appendFile('Example.txt', 'Hello world! \nFile creator modules', function(err) {
 (err) 
   if(err) throw err;
   console.log('Saved');
 
})