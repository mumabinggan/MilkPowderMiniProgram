//index.js
import {
  apiConfig
} from '../../api.js'

import {
  OMCartStorageUtils
} from '../../utils/cartstorageutils.js'

import {
  HTTP
} from '../../utils/http.js'

import {
  UserUtils
} from '../../utils/userutil.js'

//获取应用实例
const app = getApp()

let http = new HTTP()

Page({
  data: {
    motto: 'Hello World',
    userInfo: app.globalData.userInfo,
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
  getPhoneNumber: function(e) {
    console.log(e)
  },
  getUserInfo: function(e) {
    let data = e.detail
    this.wxUpdateUserInfo(data)
    app.globalData.userInfo = data.userInfo
    this.setData({
      userInfo: data.userInfo,
      hasUserInfo: true
    })
  },

  wxUpdateUserInfo:function(e) {
    console.log(e)
    console.log("wwwwwwwww")
    let rawData = e.rawData
    let signature = e.signature
    let encryptedData = e.encryptedData
    let iv = e.iv
    console.log(rawData)
    if (e == null ||
        rawData == null ||
        signature == null ||
        encryptedData == null ||
        iv == null) {
          return
    }
    console.log("+=+=+=+++++++")
    http.request({
      method: "POST",
      url: apiConfig.updateUserInfo,
      header: {
        'token': UserUtils.token(),
      },
      data: {
        rawData: rawData,
        signature: signature,
        encryptedData: encryptedData,
        iv: iv
      },
      success: function (res) {
        console.log("+=+=+=+++++++")
        console.log(res)
        let data = res.data
        if (!JHObjectUtils.isNullOrEmptyOrUndefined(data)) {
          UserUtils.user = data
        }
      }
    })
  }

})
