//& | ~ ^

let n1 = 6; //-->110
let n2 = 3; //-->011

console.log(n1 & n2);  //-->010 --> 2


// let n1 = 6; //-->110
// let n2 = 3; //-->011

console.log(n1 | n2);  //-->111 --> 7

console.log(n1 ^ n2);  //-->101 --> 5


console.log(~n1); //--> -(n1+1)--> -7
                          // 0000 0110
                          // 1111 1001
                          //        +1
                          //      1010   
console.log(~n2); //--> -(n2+1)--> -4

let n3 = -11;
console.log(~n3) // 10

console.log(~(~n3)) // 11 --> gets a number back

