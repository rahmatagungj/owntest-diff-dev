const owntestDiff = require('./src/owntest-diff');

let arr = [1, 2, 3, 4, 5];
let newArr = [1, 2, 3, 4, 5, 6];

// let result = ownTestDiff.diff(arr, newArr);

// console.log(result);
console.log(owntestDiff.diff(arr, newArr));