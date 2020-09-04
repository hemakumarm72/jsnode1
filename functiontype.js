var num1 = 1 , num2 = 30 ;


var vari = (function(num3,num4) {
    console.log(num3,num4);
})(2,2);




var vari2 = function (num4,num5) {
   var num =  num4+num5;
     return num;



}

console.log(vari2(num1,num2));


console.log((num1,num2));  // executed for undefined syntax error

function add(num1,num2) {
    return num1 * num2;

}

var exe = add(num1,num2);

console.log(exe);



//fucntion with the object properties

function objectcall(ref){
    ref.lastname = 'kumar';
    return ref;
}

var obj = {firstname : 'Hema'};
console.log( objectcall(obj));

// function with the object properties method2
numtpe = 10;

if(numtpe==10){
    var char2 = function(cp){
        cp.newmobile = 'Redmi note 9 pro';
        return cp;

    }
}

var me = {oldmobile : 'zen admire'};

console.log(char2(me));
