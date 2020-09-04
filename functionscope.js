function demo() {
    console.log("function executed is demo");
}
demo();

// method 2 function


var info = (function(){
    console.log("executed for info variable inside  function");
})();

console.log(info);  //execute fotr this function but there syntax error undefined error


var firstname = 'Hema' , lastname = 'kumar';

function function1() {
    console.log("function1 is executed");
    function2();
    function3(firstname,lastname);
    console.log(firstname,lastname);
    console.log(function3(firstname,lastname));  //  variable change to execute to return of value
};

// inside function
function function2() {
  console.log("function1 inside in function2 is executed")
    
};

function1();


function function3(first,last) {

   
    return first + "hello" + last;
    
}

