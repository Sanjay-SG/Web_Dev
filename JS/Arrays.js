//Arrays in JS, special version of Objects 
//Arrays in JS are built on top of Objects

// let obj = {
//     0: "Hello",
//     1: "World"
// }

let arr = ["Hello", "World"];


arr["key"] = "!!"; //not recommended

arr[3] = "!!"; // if you skip an index in an array, for that particular index it will show as empty, but actually it undefined.
console.log(arr[2]) // will give undefined

// console.log(obj[0], obj[1]);
console.log(arr[0], arr[1]);

// console.log(obj);
console.log(arr);


console.log(arr.length);


console.log("====================");


let a1 = new Array(100, 200, 300);


console.log(a1);

for(let i1=0; i1<a1.length; i1++) {
    console.log(a1[i1]);
}

console.log(typeof(a1));
console.log(typeof(arr));