
let arr1 = [1, 2, 3, 4, 5];
let count = 0; 
const result = arr1.reduce((accumulator, currentValue) => {
    count++;
    return accumulator+currentValue;
}, 0) //--> accumulator will be 0 initially 0 and loop start from accumulator = 0 | currentValue = 1 --> loop runs 5 times
// 0 is not mentioned loop runs 4 times

//accumulator = 1 | currentValue = 2
//accumulator = 3 | currentValue = 3
//...
//accumulator = 10 | currentValue = 5 ---> 55


console.log(result);

console.log(count);