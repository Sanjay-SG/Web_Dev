let getCharCountMap = (strArr) => {
    let map = new Map();
    // map.set("1", "h");
    for (let i = 0; i < strArr.length; i++) {
        if (map.has(strArr[i])) {
            let c = map.get(strArr[i]);
            c++;
            map.set(strArr[i], c);
        } else {
            map.set(strArr[i], 1);
        }
    }
    return map;
};

const getMaxCharCount = (map) => {
    let max = 0;
    let maxChar;
    map.forEach((k, v) => {
        console.log(k, v);
        if (k > max) {
            max = k;
            maxChar = v;
        }
    });
    return maxChar;
};

let str = "Hellooo";
let strArr = str.split("");
// console.log(getCharCountMap(strArr));

let mapC = getCharCountMap(strArr);
console.log(mapC);
let maxC = getMaxCharCount(mapC);
console.log(maxC);

// console.log(getMaxCharCount(getCharCountMap(strArr)));
