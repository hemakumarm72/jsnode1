const value = 34;
console.log(value);

//value = 10;
//console.log(value); // cannot change value 34 to 10 also constant value

(function() {
    console.log(value * 2);  // assig value change reason value constant and multiple other value interge console.log()
})();

(function() {

    //empty of function

})();

function inter() {
       const value2 =  23;
       console.log(value2);

}

inter();  // call function


// proper object asssign

const variable = {'firstname':'hema'};
variable.lastname = 'kumar';
console.log(variable);






