//For loop

for(var i=0; i<5; i++){
    console.log(i);
}

console.log("-----");
console.log(i);

// step 0 -> i = 0
// step 1 -> checking the condition if i < 5 --> true
// step 2 -> execute the code inside the block
// step 3 -> increment the i --> i++ --> 1
// step 4 -> checking if i < 5 again --> true
// step 5 -> execute the code inside the block
// .....
// .....
// .....
// step x -> i++ -> 4 
// step x+1 -> checking the condition if i < 5 --> true
// step x+2 -> execute the code inside the block
// step x+3 -> increment the i --> i++ --> 5
// step x+4 -> checking if i < 5 again --> false
// step x+5 -> get pout of the loop


//While loop

var i = 0;
while(i < 100) {
    console.log(i);
    i++;
}

console.log("---");
console.log(i);


//Do while loop --> allows at least once the statement within the block to be executed
var j = 100;
do{
    console.log("Test");
    j++;
}
while(j < 10);

console.log("---");
console.log(j);



console.log("============================");

let n1 = 9;
let res = 1;
for(let x=1; x <=10; x++) {
    res=x*n1;
    console.log(res);
}


console.log("==========================");

let str1 = " Hello World ";

for(let i in str1) {
    console.log(str1[i]);
}

for(let c of str1) {
    console.log(c);
}

console.log("===================================");

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