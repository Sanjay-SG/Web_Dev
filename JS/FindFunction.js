let arr = [1, 2, 3, 4, 5, 6];

let res = arr.find((element) => {
    if(element == 3) return true;
    return false;
});

console.log(res);

let res1 = arr.find((e) => (e === 3));


console.log(res1);

