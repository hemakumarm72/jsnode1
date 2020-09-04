function demo(type){
    var nextindex = 0;
    return {

        next : function() {
            return nextindex < type.length ? {value: type[nextindex++], done: false} : {done : true};
        }


    };
     
}

var cp = demo(['Hema','Kumar']);
console.log(cp.next().done);
console.log(cp.next().value);
console.log(cp.next().value);
console.log(cp.next().done);