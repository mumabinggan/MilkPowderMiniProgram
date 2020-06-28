class JHArrayUtils {
  static removeItem(arr, delVal) {
    if (arr instanceof Array) {
      var index = arr.indexOf(delVal);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  }

  static isNullOrEmpty(arr) {
    if (arr == undefined || arr == null || arr.length == 0) {
      return true
    }
    return false
  }

  static count(arr) {
    if (this.isNullOrEmpty(arr)) {
      return 0
    } else {
      return arr.length
    }
  }
}

export { JHArrayUtils }