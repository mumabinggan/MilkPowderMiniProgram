// pages/settlement/index.js
import { Address } 
from '../../models/address.js'

import { SettlementProductItem }
from '../../models/settlementproductitem.js'

import { SettlementViewModel }
from '../../viewmodels/settlementviewmodel.js'

import { UserUtils } from 
'../../utils/userutil.js'

import { JHObjectUtils } from 
'../../utils/objectutils.js'

import { JHArrayUtils } 
from '../../utils/arrayutils.js'

let settlementVM = new SettlementViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    products: null,
    remarks: null,
    price: null,
    totalCount: 0,
    canEditRemarks: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let itemStr = options.item
    if (JHObjectUtils.isNullOrEmptyOrUndefined(itemStr)) {
      settlementVM.previewOrder({
        success: (res) => {
          console.log(res)
          this.handlePreOrderSuccess(res)
        },
        fail: (err) => {
          this.handlePreOrderFail(err)
        }
      })
    } else {
      let item = JSON.parse(itemStr)
      settlementVM.previewOrderByItem(item, {
        success: (res) => {
          this.handlePreOrderSuccess(res)
        },
        fail: (err) => {
          this.handlePreOrderFail(err)
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

  handlePreOrderSuccess: function(res) {
    let data = res.data
    this.setData({
      products: res.data.goods,
      price: data.price,
      address: data.shipping,
    })
    let totalCount = 0
    for (let item of this.data.products) {
      totalCount += item.quantity
    }
    this.setData({
      totalCount: totalCount
    })
  },

  handlePreOrderFail: function(err) {
    console.log(err)
    wx.showToast({
      title: err,
      duration: 2000,
      icon: "none"
    })
  },

  //点击地址
  onAddress: function(e) {

  },

  handleRemarksUnFocus:function(e) {
    this.setData({
      canEditRemarks: false
    })
  },

  handleRemarksFocus: function (e) {
    console.log("handleRemarksFocus")
    this.setData({
      canEditRemarks: true
    })
  },

  handleBuy:function(e) {
    console.log("=========")
    let data = this.data
    if (data.address == null) {
      wx.showToast({
        title: "没有选择收货地址",
        duration: 2000,
        icon: "none"
      })
      return
    }
    //todo:容错处理
    //TODO 点击支付
    let requestData = new Object();
    requestData.userId = UserUtils.user.userId
    requestData.shippingId = data.address.id
    requestData.receiveTime = 0
    requestData.remarks = data.remarks
    settlementVM.confirmOrder(requestData, {
      success: (res) => {
        if (res.code == 0 && res.data != null) {
          this.setData({
            address: res.data.shipping,
            products: res.data.goods,
            price: res.data.price
          })
          let totalCount = 0
          for (let item of this.data.products) {
            totalCount += item.quantity
          }
          this.setData({
            totalCount: totalCount
          })
          wx.showToast({
            title: res.msg,
            duration: 2000,
            icon: "none"
          })
        } else {
          wx.showToast({
            title: res.msg,
            duration: 2000,
            icon: "none"
          })
        }
      },
      fail: (err) => {
        console.log(err)
        wx.showToast({
          title: "网络错误, 请稍后再试",
          duration: 2000,
          icon: "none"
        })
      }
    })
  }
})