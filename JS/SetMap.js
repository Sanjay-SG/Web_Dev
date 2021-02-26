
let s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);

console.log(s1);

s1.forEach((i) => {
    console.log(i);
});

let m1 = new Map();

m1.set("1", "Hi");
m1.set("2", "Hello");
m1.set("3", "Hey");

console.log(m1);

m1.forEach((val, key) => {
    console.log(key, val);
});

console.log(typeof(s1));
console.log(typeof(m1));