// pages/orderdetail/index.js
import { OrderViewModel }
  from '../../viewmodels/orderviewmodel.js'

import { UserUtils } from
  '../../utils/userutil.js'
  
const orderVM = new OrderViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let orderId = 0
    orderVM.fetchOrderDetail(UserUtils.user.id, orderId, {
      success: (res) => {
        this.setData({
          order: res.data
        })
      },
      fail: (err) => {
        console.log(err)
      }
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

  handleToOrderDetail: function (e) {
    console.log(e.target.dataset.id)
  },

  handleUrgeOrder: function (e) {
    console.log(e.detail)
  },

  handlePayOrder: function (e) {
    console.log(e.detail)
  },

  handleDeleteOrder: function (e) {
    console.log(e.detail)
  },

  handleReBuyOrder: function (e) {
    console.log(e.detail)
  },

  handleCommentOrder: function (e) {
    console.log(e.detail)
  },

  handleConfirmOrder: function (e) {
    console.log(e.detail)
  }
})