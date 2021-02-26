function funactionName(param1, param2 = 0) { 
    //code
    console.log(param1+", "+ param2);

    return function (arg1) {
        console.log("f1");
        arg1();
    };
    // return {id:100, name:"SSG"};
    // return true;
    // return "String";
    // return 500; // when function don't return anything JS will by default place -> return undefined
}

//calling function
funactionName("This is a string", "Another string");
funactionName(100); // second arg here will be undefined, if default param is specified then it will print default param in this case i.e. 0 
funactionName(true); // second arg here will be undefined, if default param is specified then it will print default param in this case i.e. 0
funactionName({id: 1, name: "Sanjay"}); // second arg here will be undefined, if default param is specified then it will print default param in this case i.e. 0


let value = funactionName();
console.log(value(function(){console.log("Function arg for f1")})); // passing function to the function as an argument


//=================================================================
// function return and function call
//=================================================================
function f2(n) {
    console.log("from: f2");
    return (n+100);
}

function f1() {
    let i = 10;
    f2(i*i); /// this will just call a function but will not a return a value from that function.
    return "from: f1";
}

function f3() {
    let i = 10;
    return f2(i*i); // this will return a function along with what that function's return value
}

console.log(f1());
console.log(f3());


console.log("==============================");



foo1();
foo2();

function foo1() {
    console.log("foo1");
}

const foo2 = function () {
    console.log("foo2");
}