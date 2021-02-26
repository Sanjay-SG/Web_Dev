// || OR
let var1 = 2 || 3; // 2 --> returns the first truth value

let var2 = null || 2 || 3; //2--> returns the first truth value

let var3 = 0 || 2 || 3; //2--> returns the first truth value

let var33 = 0 || null || undefined; //undefined --> if there's no true value so it returns the last value


console.log(var1);
console.log(var2);
console.log(var3);
console.log(var33);


// &&  AND
let var4 = "abc" && 2 && 3; //3--> returns the first false value ---> if there's no false value so it returns the last value
let var5 = 19 && 0 && "abc" && 2 && 3; //0--> returns the first false value

console.log(var4);
console.log(var5);



//--> ! NOT

let b1 = 100;
let b2 = null;

console.log(!b1); //b1 is a 100 i.e. truth value do it returns !(true) -> false
console.log(!b2); // b2 is a null i.e. false value so it returns !(false) -> true
console.log(!!b1); // b1 is 100 i.e. truth value so it returns !(!true) -> true