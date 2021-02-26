let num = 42;

// console.log(num + 1);
// console.log(1 + num);

console.log(num++); // returns the value first and then increments it --> 42
console.log(num); //43

console.log(++num); //increments value first and then returns it to the function --> 44
console.log(num); //44


let num1 = 50;

// num2 = (++num1) + (num1++); // 51 + 51 = 102

// console.log(num2);


num3 = (num1++) + (++num1); // 50 + 52 = 102
console.log(num3);


//decrement operator


let num11 = 50;

num12 = (--num11) + (num11--); // 49 + (49) = 98

console.log(num12);


// num13 = (num11--) + (--num11); // 50 + (49 - 1) = 98
// console.log(num13);