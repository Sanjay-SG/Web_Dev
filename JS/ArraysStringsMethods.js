let ar1 = [1, 2, 3, 2];

let ar2 = [4, 9, 6];

let ar3 = ar1.concat(ar2).sort();
console.log(ar3);

let str = "Hello";

// console.log(str.split("").reverse().join().split(",").join(""));

console.log(str.split("").reverse().join(""));

console.log(str.split("").reverse().join().replace(/,/g, "")); // for more than one replace
