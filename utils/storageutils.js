class JHStorageUtils {

  static addItemSync(key, value) {
    if (key == null || value == null) {
      return
    }
    try {
      wx.setStorageSync(key, value)
    } catch (e) {}
  }

  static addItemAsync(key, value) {
    if (key == null || value == null) {
      return
    }
    wx.setStorage({
      key: key,
      data: value
    })
  }

  static delItemSync(key) {
    if (key == null) {
      return
    }
    try {
      wx.removeStorageSync(key)
    } catch (e) {
      // Do something when catch error
    }
  }

  static delItemAsync(key) {
    if (key == null) {
      return
    }
    wx.removeStorage({
      key: key,
      success (res) {
        //console.log(res)
      }
    })
  }

  static fetchItemSync(key) {
    if (key == null) {
      return null
    }
    try {
      const value = wx.getStorageSync(key)
      return value
    } catch (e) {
      // Do something when catch error
      return null
    }
  }

  static fetchItemAsync(key, complete) {
    if (key == null) {
      return null
    }
    wx.getStorage({
      key: key,
      complete: complete,
    })
  }

  static clearAllItemsSync() {
    try {
      wx.clearStorageSync()
    } catch(e) {
      // Do something when catch error
    }
  }

  static clearAllItemsAsync() {
    wx.clearStorage()
  }
  
}

export { JHStorageUtils }