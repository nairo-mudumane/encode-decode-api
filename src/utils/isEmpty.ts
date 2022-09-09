export function isObjectEmpty(obj: Object) {
  if (obj.constructor === Object || Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

export function isStringEmpty(str: string) {
  if (str && typeof str === "string") {
    if (str === null || str === undefined || str === "") {
      return true;
    }
  } else {
    return false;
  }
}

export function isArrayEmpty(arr: any[]) {
  if (arr) {
    if (arr.length === 0) {
      return false;
    }
  }
  return true;
}

export function isEmpty(data: Object | string | any[]) {
  if (data) {
    if (typeof data === "object") {
      return isObjectEmpty(data);
    } else if (typeof data === "string") {
      return isStringEmpty(data);
    }
  }
  return true;
}
