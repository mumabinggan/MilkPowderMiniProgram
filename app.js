import { cookieParser } from 'utils/cookieutils.js'
import {
  apiConfig
} from 'api.js'

import {
  UserUtils
} from '/utils/userutil.js'

import {
  User
} from '/models/user.js'

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this
    console.log("asdfasd====")
    let userId = wx.getStorageSync('userId')
    console.log(userId)
    // if (userId != "") {
    //   let user = new User()
    //   user.id = userId
    //   UserUtils.user = user
    // }
    wx.checkSession({
      success: function (res) {
        console.log("asdfasd")
        let userId = wx.getStorageSync('userId')
        // let user = new User()
        // user.id = userId
        // UserUtils.user = user
        // 获取用户信息
        that.getUserInfo({
          success: function (res) {
            that.wxUpdateUserInfo(res)
          }
        })
      },
　　　 fail: function (res) {
      　　that.wxLogin({
            success: function (res) {
              let cookies = cookieParser(res.header["Set-Cookie"])
              console.log(cookies)
              var cookieStrs = []
              cookies.forEach(function (val, index, arr) {
                cookieStrs.push(val["cookieStr"])
              });
              let cookiesStr = cookieStrs.join(";")
              wx.setStorage({
                key: 'cookie',
                data: cookiesStr, // 从返回数据的响应头中取cookie
              })
              // let user = new User()
              // let userId = res.data.data.userId
              // user.id = userId
              // UserUtils.user = user
              wx.setStorage({
                key: 'userId',
                data: res.data.data.userId
              })
              // 获取用户信息
              that.getUserInfo({
                success: function(res) {
                  that.wxUpdateUserInfo(res)
                }
              })
            }
         })
　　　 }
    })
    // 登录
  },

  wxLogin:function(param) {
    console.log("开始login")
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        wx.request({
          method: "POST",
          url: apiConfig.login,
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res.data)
            if (res.data.code == 0 && param.success) {
              param.success(res)
            }
          }
        })
      }
    })
  },

  getUserInfo: function(param) {
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("}}}}}}}}}}}}}===")
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log("}}}}}}}}}}}}}==={{{")
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // UserUtils.user = 
              console.log("}}}}}}}}}}}}}")
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              if (param.success) {
                param.success(res.userInfo)
              }
            }
          })
        }
      }
    })
  },

  wxUpdateUserInfo: function (userInfo) {
    console.log("=+++++++++++++++")
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
        console.log("=====+++++++++==ad=====")
        console.log(res.data)
      }
    })
  },

  globalData: {
    userInfo: null,
    shopcartList: [],
    shopcartProductCount: 0,
    deviceInfo: null
  }
})