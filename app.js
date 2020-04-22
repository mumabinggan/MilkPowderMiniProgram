import { cookieParser } from 'utils/cookieutils.js'
import {
  apiConfig
} from 'api.js'

import {
  UserUtils
} from '/utils/userutil.js'

import {
  JHObjectUtils
} from '/utils/objectutils.js'

import {
  HTTP
} from '/utils/http.js'

import {
  User
} from '/models/user.js'

let http = new HTTP()

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    let that = this
    wx.checkSession({
      success: function (res) {
        UserUtils.fetchUser()
        console.log("check success")
        // 获取用户信息
        that.getUserInfo({
          success: function (res) {
            that.wxUpdateUserInfo(res)
          }
        })
      },
　　　 fail: function (res) {
        console.log("check fail")
      　　that.wxLogin({
            success: function (res) {
              let data = res.data
              if (res.code == 0 && !JHObjectUtils.isNullOrEmptyOrUndefined(data)) {
                UserUtils.setUser(res.data)
              } else {
                wx.showToast("登录错误, 请重试")
              }
              console.log(res)
              console.log("wxLogin success")
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
        http.request({
          url: apiConfig.login,
          method: 'POST',
          data: {
            code: res.code
          },
          success: (res) => {
            if (res.data == null) {
              wx.showToast("登录错误, 请稍候重试")
            } else {
              if (res.code == 0) {                
                param.success(res)
              }
            }            
          },
          fail: (err) => {
            param.fail(err)
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
                param.success(res)
              }
            }
          })
        }
      }
    })
  },

  wxUpdateUserInfo: function (e) {
    console.log("=+++++++++++++++")
    console.log(e)
    let rawData = e.rawData
    let signature = e.signature
    let encryptedData = e.encryptedData
    let iv = e.iv
    console.log(rawData)
    console.log(signature)
    console.log(encryptedData)
    console.log(iv)
    console.log("=+++++++++++++++")
    if (e == null ||
      rawData == null ||
      signature == null ||
      encryptedData == null ||
      iv == null) {
      return
    }
    console.log(UserUtils.user)
    http.request({
      method: 'POST',
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
        console.log("=====+++++++++==ad=====")
        console.log(res)
        let data = res.data
        if (!JHObjectUtils.isNullOrEmptyOrUndefined(data)) {
          UserUtils.setUser(data)
        }
      }
    })
  },

  globalData: {
    userInfo: null,
    triggerRefreshShopcart: true,
    shopcartBriefListOfLogout: [], //没有登录的购物车商品简要信息
    shopcartProductCount: 0,
    deviceInfo: null
  }
})