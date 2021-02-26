let a1 = [1, 2, 3];

let a2 = [...a1, 4, 5];


let obj1 = {id: 1, name:"Sanjay"};
let obj = {address: "BLR"};

let obj2 = [{...obj1}, {id: 2, name: "SSG"}];

let obj3 = {...obj1, ...obj};

console.log(a1);
console.log(a2);

console.log(obj1);
console.log(obj2);

console.log(obj3);

console.log(JSON.stringify(obj3, null, 2));