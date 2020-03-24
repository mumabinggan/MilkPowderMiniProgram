class JHDeviceUtils {

  static tryFetchDeviceInfo() {
    if (getApp.globalData.deviceInfo == null) {
      getApp.globalData.deviceInfo = wx.getSystemInfoSync()
    }
    return getApp.globalData.deviceInfo
  }

  static isIOS() {
    let deviceInfo = this.tryFetchDeviceInfo()
    if (deviceInfo == null) {
      return false
    }
    return deviceInfo.platform == "ios"
  }

  static isAndroid() {
    let deviceInfo = this.tryFetchDeviceInfo()
    if (deviceInfo == null) {
      return false
    }
    return deviceInfo.platform == "android"
  }

  static isDevTools() {
    let deviceInfo = this.tryFetchDeviceInfo()
    if (deviceInfo == null) {
      return false
    }
    return deviceInfo.platform == "devtools"
  }

}

export { JHDeviceUtils }