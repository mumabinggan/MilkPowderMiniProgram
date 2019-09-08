// pages/settlement/index.js
import { Address } 
from '../../models/address.js'

import { SettlementProductItem }
from '../../models/settlementproductitem.js'

import { SettlementViewModel }
from '../../viewmodels/settlementviewmodel.js'

import { UserUtils } from 
'../../utils/userutil.js'

import { ArrayUtils } 
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
    let address = Address.test()
    this.setData({
      address: address
    })
    let productIds = null
    settlementVM.fetchSettlement(UserUtils.user.userId, productIds, {
      success: (res) => {
        this.setData({
          address: res.data.address,
          products: res.data.products,
          remarks: res.data.remarks,
          price: res.data.price
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })

    let totalCount = 0
    for (let item of this.data.products) {
      totalCount += item.buyCount
    }
    this.setData({
      totalCount: totalCount
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
    //TODO 点击支付
  }
})