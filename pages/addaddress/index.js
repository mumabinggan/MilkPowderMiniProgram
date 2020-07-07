// pages/addaddress/index.js
import {
  Province
} from '../../models/province.js'

import {
  UserUtils
} from '../../utils/userutil.js'

import {
  Address
} from '../../models/address.js'

import {
  JHRouterUtils
} from '../../utils/jsrouterutils.js'

import { AddressViewModel } from '../../viewmodels/addressviewmodel.js'

let addressVM = new AddressViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFullSucreen: getApp().globalData.isFullSucreen,
    
    isAdd: false,
    addressId: null,
    item: null,
    name: "",
    phone: "",
    communityName: "",
    communityId: 0,
    address: "",
    isDefault: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(options.isAdd)
    this.setData({
      isAdd: (options.isAdd == "1")?true:false,
      addressId: options.addressId
    })
    
    let data = this.data;
    let title = data.isAdd ? "增加地址" : "修改地址"
    wx.setNavigationBarTitle({
      title: title,
    })

    if (!data.isAdd && data.addressId != null) {
      let that = this
      console.log("===========asdfasdfa")
    console.log(data.addressId)
      addressVM.fetchAddress(UserUtils.user.userId, data.addressId, {
        success: (res) => {
          console.log(res.data)
          if (res.code == 0) {
            let item = res.data
            this.setData({
              name: item.name,
              phone: item.phone,
              communityId: item.communityId,
              communityName: item.communityName,
              address: item.address,
              isDefault: item.isDefault,
              item: item
            })
          } else {
            wx.showToast({
              title: "请求失败, 请稍后重试",
              duration: 2000,
              icon: "none",
              complete: function() {
                wx.navigateBack()
              }
            })
          }
          
        },
        fail: (err) => {
          console.log(err)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  switchChange: function(e) {
    const value = e.detail.value
    this.setData({
      isDefault: value
    })
  },

  handleInputPhone: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  handleInputName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  handleInputAddress: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  handleSelectCommunity: function(e) {
    console.log("=====")
    JHRouterUtils.addCommunity(this.data.communityId)
  },

  onSave: function() {
    //保存地址
    let item = this.data.item
    if (item == null) {
      item = new Address()
    }
    let userId = UserUtils.user.userId
    console.log(UserUtils.user)
    console.log("===================")
    let data = this.data
    item.userId = userId
    item.name = data.name
    item.phone = data.phone
    item.communityId = data.communityId
    item.communityName = data.communityName
    item.address = data.address
    item.isDefault = data.isDefault
    addressVM.saveAddress(userId, item, {
      success: (res) => {
        console.log(res)
        console.log("=======日你妈B微信======")
        //TODO toast提示并且返回上一层
        if (res.code == 0) {
          wx.showToast({
            title: "地址保存成功",
            duration: 2000,
            complete: function() {
              wx.navigateBack()
            }
          })
        } else {
          wx.showToast({
            title: res.msg,
            duration: 2000
          })
        }
      },
      fail: (err) => {
        console.log(err)
        wx.showToast({
          title: "地址保存失败, 请稍候重试",
          duration: 2000
        })
      }
    })
  }
})