class ArrayUtils {
  static removeItem(arr, delVal) {
    if (arr instanceof Array) {
      var index = arr.indexOf(delVal);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  }
}

export { ArrayUtils }