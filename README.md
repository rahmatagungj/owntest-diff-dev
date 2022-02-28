## OwnTest Diff
This package will finding differences between two object or arrays, you can combine this with `owntest.js` to test your code.

## Usage
```js
const ownTestDiff = require('./owntest-diff');

let arr = [1, 2, 3, 4, 5];
let newArr = [1, 2, 3, 4, 5, 6];

let result = ownTestDiff.diff(arr, newArr)

console.log(result);
```
