class JHProductUtils {
  static isSaleOff(status, stock) {
    return (status == 2 || status == 3 || stock == 0)
  }
}

export { JHProductUtils }