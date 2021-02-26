//var, let, const
"use strict"

var firstname = "Sanjay";
let lastname = "Gunagi";
const DOB = "22111995";

//var ---> functional scope
//let ----> block scope
//const ----> block scope, can't be reinitialized.

function varFunction() {
    var a = 10;

    if(a == 10) {
        var a1 = 100;
        let a2 = 200;
        const a3 = 300;

    }
    a1 = 500;
    console.log(a1);
    a2 = 600;           //gives Variables.js:23 Uncaught ReferenceError: a2 is not defined
    console.log(a2);  //gives Variables.js:23 Uncaught ReferenceError: a2 is not defined
    a3 = 700;     //gives Variables.js:23 Uncaught ReferenceError: a3 is not defined
    console.log(a3); //gives Variables.js:23 Uncaught ReferenceError: a3 is not defined
}

varFunction();