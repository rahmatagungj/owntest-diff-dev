import { diff } from './diff';

let owntestDiff: any = { 
  diff: (obj: any, newObj: any, _stack: any) => diff(obj, newObj, _stack),
}

export default owntestDiff
module.exports = owntestDiff;