class JHObjectUtils {

  static isNullOrUndefined(obj) {
    return (obj == null || typeof(obj) == undefined);
  }

  static isNullOrEmptyOrUndefined(obj) {
    return (obj == null || typeof(obj) == undefined || obj == "");
  }
}

export { JHObjectUtils }