//index.js
import {
  apiConfig
} from '../../api.js'

import {
  OMCartStorageUtils
} from '../../utils/cartstorageutils.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    OMCartStorageUtils.fetchItemsSync()
  },
  getUserInfo: function(e) {
    let key = 'cookie'
    let cookie = wx.getStorageSync(key);
    var that = this
    wx.getStorage({
      key: 'cookie',
      success: (cookie) => {
        console.log(cookie)
        that.wxUpdateUserInfo(e.detail)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  wxUpdateUserInfo:function(userInfo) {
    console.log(userInfo)
    var rawData = userInfo.rawData
    var signature = userInfo.signature
    var encryptedData = userInfo.encryptedData
    var iv = userInfo.iv
    if (userInfo == null ||
        rawData == null ||
        signature == null ||
        encryptedData == null ||
        iv == null) {
          return
    }
    console.log(userInfo)
    wx.request({
      method: "POST",
      url: apiConfig.updateUserInfo,
      data: {
        rawData: rawData,
        signature: signature,
        encryptedData: encryptedData,
        iv: iv
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("cookie") // 设置cookie
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }

})
