/* function LinkedListStack() {
  this.head = null;
}

LinkedListStack.prototype.insert = function (val) {
  node = { data: val, link: null };
  temp = this.head;

// console.log(this.head);
  if (this.head === null) {
    this.head = node;
  }
  else {
    while (temp.link !== null) {
      temp = temp.link;
    }
    temp.link = node;
    node.link = null;
  }
};

LinkedListStack.prototype.display = function () {
  temp = this.head;
  if (temp === null) {
    console.log("No nodes");
    return;
  }
  while (temp !== null) {
    console.log(temp.data);
    console.log(temp);
    temp = temp.link;
  }
};

let ll = new LinkedListStack();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.insert(60);

ll.display();
 */

// import { threadId } from "worker_threads";

//  let id = Symbol(1);
//  let id1 = "id1";
//  alert(id);
//  alert(id1);

/* let user = {id: 100};

let name = Symbol("name");

user[name] = "SSG";

console.log(user);

console.log(user[name]);

console.log(new Date());

let dt = new Date();
console.log(dt.toLocaleTimeString());

 */

//  function f1(n) {
//    if(n <= 0) {
//       return;
//    }
//    console.log("Hello");
//    f1(n-1);
//  }

//  f1(10);

// let obj = {
//   id: 123,
//   name: "Sanjay",
//   getId: function () {
//     console.log(this);
//     console.log(this.id);
//   },
// };

// obj.getId();

// class MyClass {
//   constructor(id = 10000) {
//     this.id = id;
//   }

//   getId() {
//     console.log(this);
//     console.log(this.id);
//   }
// }

// let mc = new MyClass(100);
// mc.getId();

// function MyFunctionClass() {
//   this.id = 200;
//   this.name = "SSG";
// }

// MyFunctionClass.prototype.getId = function () {
//   console.log(this);
//   console.log(this.id);
// };

// let mfc = new MyFunctionClass();
// mfc.getId();

// let ar1 = [1, 2, 3];

// let ar2 = [4, 9, 6];

// let ar3 = ar1.concat(ar2).sort((a, b) => a > b);
// console.log(ar3);

// let str = "Hello";

// console.log(str.split("").reverse().join().split(",").join(""));

// let val = 100;

// if (val++) {
//   console.log(val);
// }

// let map1 = new Map();

// map1.set(1, "Sanjay");

// console.log(map1);

// console.log(map1.has(1));
// map1.forEach((value, key) => {
//   console.log(key, value);
// });

// let set1 = new Set();

// set1.add(1);
// set1.add(1);
// set1.add(1);

// console.log(set1);

// set1.forEach((val) => {
//   console.log(val);
// });

// const getLongestStr = (strArr) => {
//   let longestLength = 0;
//   let longestStr;
//   strArr.forEach((str) => {
//     if (str.length > longestLength) {
//       longestLength = str.length;
//       longestStr = str;
//     }
//   });
//   return longestStr;
// };

// let strArr = ["abc", "abcd", "ab", "a"];
// console.log(getLongestStr(strArr));

// let getCharCountMap = (strArr) => {
//   let map = new Map();
//   // map.set("1", "h");
//   for (let i = 0; i < strArr.length; i++) {
//     if (map.has(strArr[i])) {
//       let c = map.get(strArr[i]);
//       c++;
//       map.set(strArr[i], c);
//     } else {
//       map.set(strArr[i], 1);
//     }
//   }
//   return map;
// };

// const getMaxCharCount = (map) => {
//   let max = 0;
//   let maxChar;
//   map.forEach((k, v) => {
//     console.log(k, v);
//     if (k > max) {
//       max = k;
//       maxChar = v;
//     }
//   });
//   return maxChar;
// };

// let str = "Hellooo";
// let strArr = str.split("");
// // console.log(getCharCountMap(strArr));

// let mapC = getCharCountMap(strArr);
// console.log(mapC);
// let maxC = getMaxCharCount(mapC);
// console.log(maxC);

// // console.log(getMaxCharCount(getCharCountMap(strArr)));

// let fname = "Sanjay";
// let lname = "Gunagi";

// module.exports = { fname, lname };

/* let a1 = [1, 2];
a1[10] = 100;
console.log(a1);
console.log(a1.length);

console.log(Array.of(7, 2, 4));

console.log(Array.from("Hello"))

console.log(a1.splice(0)); */

console.log(typeof (RegExp))
console.log(typeof (Infinity));