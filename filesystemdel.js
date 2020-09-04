var fs = require('fs');
fs.appendFile('exampledel.txt','Hello World \n Write successful',function(err){
    (err)
    if (err) throw err
    console.log('Saved');
});

// del files system

fs.unlink('exampledel.txt' ,function(err){
   (err)
   if (err) throw err
   console.log('deleted successful');

});