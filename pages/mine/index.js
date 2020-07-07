// pages/mine/index.js
import {
  ServiceItem
} from '../../models/serviceitem.js'

import { UserUtils } from
  '../../utils/userutil.js'

import { JHRouterUtils } from
  '../../utils/jsrouterutils.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [ServiceItem.waitPay(),
                ServiceItem.waitShip(),
                ServiceItem.waitReceipt(),
                ServiceItem.allOrder()
                ],
    serviceList: [ServiceItem.address(),
                  ServiceItem.chat(),
                  ServiceItem.setting()
                  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员',
    })
    console.log("===============")
    console.log(UserUtils.user)
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

  handleIntegration: function() {
    //todo: 还没有开发
  },

  handleCoupon: function() {
    //todo: 还没有开发
  },

  handleMoreOrder: function() {
    JHRouterUtils.orderList()
  },

  handleItem: function(e) {
    console.log(e.detail)
    let id = e.detail.id
    console.log("==============")
    if (id == 1) {
      JHRouterUtils.orderList()
    } else if (id == 2) {
      JHRouterUtils.orderList()
    } else if (id == 3) {
      JHRouterUtils.orderList()
    } else if (id == 5) {
      JHRouterUtils.orderList()
    } else if (id == 100) {
      JHRouterUtils.addressList(1, 0)
    } else if (id == 101) {
      JHRouterUtils.chat()
    } else if (id == 102) {
      JHRouterUtils.setting()
    }
  }
})