class SafeValueUtils {

  static safeValue(value) {
    return safeValue(value, false)
  }

  static safeValue(value, isValue) {
    if (value === undefined) {
      return isValue ? 0 : null
    }
    return value
  }

  static isUndefined(value) {
    return (value === undefined)
  }
}

export { SafeValueUtils }