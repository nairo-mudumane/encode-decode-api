function isObjectEmpty(obj) {
  if (obj.constructor === Object || Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

function isStringEmpty(str) {
  if (str && typeof str === "string") {
    if (str === null || str === undefined || str === "") {
      return true;
    }
  } else {
    return false;
  }
}

function isEmpty(data) {
  if (data) {
    if (typeof data === "object") {
      return isObjectEmpty(data);
    } else if (typeof data === "string") {
      return isStringEmpty(data);
    }
  }
  return true;
}

module.exports = {
  isEmpty,
  isStringEmpty,
  isObjectEmpty,
};
