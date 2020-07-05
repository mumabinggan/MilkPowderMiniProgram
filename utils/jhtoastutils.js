class JHToastUtils {
  static show(msg) {
    wx.showToast({
      title: msg,
      duration: 2000,
      icon: 'none'
    })
  }
}

export { JHToastUtils }