//foreach is similar to map but, foreach will not create a new array.

//foreach is used a replacement of traditional for loop with some differences

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.forEach((element) => {
    console.log(element*2);
}))
