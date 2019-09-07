// pages/productdetail/index.js
import { ProductViewModel } 
from '../../viewmodels/productviewmodel.js'

import { UserUtils } from
  '../../utils/userutil.js'

const productVM = new ProductViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null,
    showTopIcon: true,
    shopCount: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productVM.fetchProductDetail(UserUtils.user.userId, {
      success: (res) => {
        this.setData({
          product: res.data
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

  handleToHome:function() {
    console.log("toHome")
  },

  handleFavorite: function () {
    console.log("toFavorite")
  },

  handleAddToShopCart: function () {
    console.log("toAddToShopCart")
  },

  handleBuy: function () {
    console.log("toBuy")
  },

  //跳至顶部
  handleToTop: function () {
    console.log("handleToTop")
  },

  //跳转到购物车
  handleToShopCart: function () {
    console.log("handleToShopCart")
  }
})