let arr = ["SSG", "GSS", "Sanjay", "Abc"];

console.log(arr.indexOf("Sanjay")); // 2
console.log(arr.indexOf("g")); //-1--> if doesn't exist
console.log(arr.indexOf("Sanjay") > -1); //true

//ES6
console.log(arr.includes("Sanjay")); //true


//find-->especially useful in array of objects but can be used for others also

let objArr = [
    {
        name: "ABC",
        age: 14
    },
    {
        name: "XYZ",
        age: 15
    }
]


//find exits after first match, if doesn't exist it returns undefined
let obj1 = objArr.find((obj) => {
    return obj.age == 15;
})

console.log(obj1);