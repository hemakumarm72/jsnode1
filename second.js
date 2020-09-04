const person = {
    name:"hema",
    walk(){
        console.log(this);

   }
};

person.walk();
const walk= person.walk;
walk();


