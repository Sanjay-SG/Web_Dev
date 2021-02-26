let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1.filter((element) => {
    // return element>2;
    if(element > 2) return true;
    return false;
})

console.log(arr2); //  [3, 4, 5]



let arr3 = arr1.filter((element) => (element > 2));

console.log(arr3); //  [3, 4, 5]