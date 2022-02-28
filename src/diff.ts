export function diff(obj: any, newObj: any, _stack: any): any[] {
  if (_stack === void 0) _stack = []

  let diffs: any[] = []
  const IS_OBJ_ARRAY: boolean = Array.isArray(obj)

  const _compare: (key: any) => any= (key: any): any => {
    let objKey: any = obj[key]
    let path: any = IS_OBJ_ARRAY ? +key : key

    if (!(key in newObj)) {
      return diffs.push({
        type: "REMOVE",
        path: [path],
        oldValue: obj[key],
      })
    }

    let newObjKey: any = newObj[key]
    let areObjects: boolean = typeof objKey === "object" && typeof newObjKey === "object"

    if (
      objKey !== newObjKey &&
      !(
        areObjects &&
        (isNaN(objKey)
          ? objKey + "" === newObjKey + ""
          : +objKey === +newObjKey)
      )
    ) {
      return diffs.push({
        path: [path],
        type: "CHANGE",
        value: newObjKey,
        oldValue: objKey,
      })
    }

    if (objKey && newObjKey && areObjects && !_stack.includes(objKey)) {
      const nestedDiffs = diff(objKey, newObjKey, [])

      return diffs.push.apply(
        diffs,
        nestedDiffs.map((difference: any): any => {
          difference.path.unshift(path)
          return difference
        })
      )
    }
  }

  for (let key in obj) {
    _compare(key)
  }

  const IS_NEW_OBJ_ARRAY: boolean = Array.isArray(newObj)

  for (let key in newObj) {
    if (key in obj) continue

    diffs.push({
      type: "CREATE",
      path: [IS_NEW_OBJ_ARRAY ? +key : key],
      value: newObj[key],
    })
  }

  return diffs
}