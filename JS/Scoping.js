var a1 = 100;
let a2 = "Abc"
const a3 = "CONSTANT"

if(a1 > 99) {
    let a2 = "Xyz";
    var a4 = 1000;
    let a5 = 500;
    const a6 = "1";
    console.log("Inside if block a2: ",a2);
}


console.log("Global a2: ",a2)
// console.log(a6); //Uncaught ReferenceError: a6 is not defined --> because const has only block scope i.e. inside curly braces -->{only in the block where it is declared}
// a3 = 1; //Scoping.js:10 Uncaught TypeError: Assignment to constant variable.
// console.log(a4); // gives 1000 because var has a functional scope, i.e. it is accessible within the function where it is declared
// console.log(a5); //Scoping.js:9 Uncaught ReferenceError: a5 is not defined--> because let has only block scope i.e. inside curly braces -->{only in the block where it is declared}




//for let and const --> const is similar to let but const can't be modified once initialized
{
    let f2var = 900;
    const f2const = 800;
}
// f2();
// console.log(f2var); //Uncaught ReferenceError: f2var is not defined
console.log(f2const); //Uncaught ReferenceError: f2const is not defined




// {
//     var f2var = 900;
// }
// f2();
// console.log(f2var); //No error because it's a block


//function scope for var

// function f2() {
//     var f2var = 900;
// }
// f2();
// console.log(f2var); //Uncaught ReferenceError: f2var is not defined
