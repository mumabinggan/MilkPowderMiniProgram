// pages/cart/index.js
import { ShopCartViewModel } from '../../viewmodels/shopcartviewmodel.js'

import { UserUtils } from '../../utils/userutil.js'

let shopcartVM = new ShopCartViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcart: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    shopcartVM.fetchShopCartList(UserUtils.user.userId, {
      success: (res) => {
        console.log(res)
        this.setData({
          shopcart: res.data
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

  handleAddCount: function (e) {
    this.handleBuyCount(e.detail, true)
  },

  handleSubCount: function (e) {
    this.handleBuyCount(e.detail, false)
  }

})