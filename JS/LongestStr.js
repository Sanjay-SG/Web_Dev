const getLongestStr = (strArr) => {
  let longestLength = 0;
  let longestStr;
  strArr.forEach((str) => {
    if (str.length > longestLength) {
      longestLength = str.length;
      longestStr = str;
    }
  });
  return longestStr;
};

let strArr = ["abc", "abcd", "ab", "a"];
console.log(getLongestStr(strArr));
