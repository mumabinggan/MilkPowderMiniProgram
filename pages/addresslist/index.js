// pages/address/index.js
import { AddressViewModel } from '../../viewmodels/addressviewmodel.js'

import { UserUtils } from
 '../../utils/userutil.js'

import {
  JHRouterUtils
} from '../../utils/jsrouterutils.js' 

let addressVM = new AddressViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    canAdd: true,
    isSelected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = UserUtils.user.id
    //接收参数
    this.setData({
      canAdd: options.canAdd,
      isSelected: options.isSelected
    })
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
    addressVM.fetchAddressList(UserUtils.user.id, {
      success: (res) => {
        console.log(res.data)
        this.setData({
          list: res.data,
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
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

  onAddAddress: function(e) {
    //TODO 添加地址
    wx.navigateTo({
      url: JHRouterUtils.addAddress()
    })
  },

  onAddressItem: function(e) {
    let addressId = e.target.dataset.id
    console.log(addressId)
    if (this.data.isSelected) {
      //TODO 选择地址
    } else {
      //编辑地址
      console.log(JHRouterUtils.editAddress())
      wx.navigateTo({
        url: JHRouterUtils.editAddress(addressId)
      })
    }
  }
})